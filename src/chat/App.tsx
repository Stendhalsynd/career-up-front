'use client'

import axios from 'axios'
import { OpenVidu, Session } from 'openvidu-browser'
import { useEffect, useState, useCallback, useRef } from 'react'
import UserVideoComponent from 'chat/UserVideoComponent.tsx'
import { Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import { NicknameButton, RequestButton } from 'components/molecules/index.ts'

const APPLICATION_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://careerup.vercel.app/'
    : 'http://localhost:5001/'

export default function App() {
  const [mySessionId, setMySessionId] = useState('SessionA')
  const [myUserName, setMyUserName] = useState(
    `Participant${Math.floor(Math.random() * 100)}`,
  )
  // const [session, setSession] = useState<OpenVidu | undefined>(undefined)
  const [session, setSession] = useState<Session>()
  const [mainStreamManager, setMainStreamManager] = useState<any>(undefined)
  const [publisher, setPublisher] = useState<any>(undefined)
  const [subscribers, setSubscribers] = useState<any[]>([])
  const [currentVideoDevice, setCurrentVideoDevice] = useState<any>(null)

  const OV = useRef(new OpenVidu())

  const handleChangeSessionId = useCallback((e: any) => {
    setMySessionId(e.target.value)
  }, [])

  const handleChangeUserName = useCallback((e: any) => {
    setMyUserName(e.target.value)
  }, [])

  const handleMainVideoStream = useCallback(
    (stream: any) => {
      if (mainStreamManager !== stream) {
        setMainStreamManager(stream)
      }
    },
    [mainStreamManager],
  )

  const joinSession = useCallback(() => {
    const mySession = OV.current.initSession()

    mySession.on('streamCreated', (event) => {
      const subscriber = mySession.subscribe(event.stream, undefined)
      setSubscribers((prevSubscribers) => [...prevSubscribers, subscriber])
    })

    mySession.on('streamDestroyed', (event) => {
      deleteSubscriber(event.stream.streamManager)
    })

    mySession.on('exception', (exception) => {
      console.warn(exception)
    })

    setSession(mySession)
  }, [])

  useEffect(() => {
    if (session) {
      getToken().then(async (token) => {
        try {
          await session.connect(token, { clientData: myUserName })

          const publisher = await OV.current.initPublisherAsync(undefined, {
            audioSource: undefined,
            videoSource: undefined,
            publishAudio: true,
            publishVideo: true,
            resolution: '640x480',
            frameRate: 30,
            insertMode: 'APPEND',
            mirror: false,
          })

          session.publish(publisher)

          const devices = await OV.current.getDevices()
          const videoDevices = devices.filter(
            (device) => device.kind === 'videoinput',
          )
          const currentVideoDeviceId = publisher.stream
            .getMediaStream()
            .getVideoTracks()[0]
            .getSettings().deviceId
          const currentVideoDevice = videoDevices.find(
            (device) => device.deviceId === currentVideoDeviceId,
          )

          setMainStreamManager(publisher)
          setPublisher(publisher)
          setCurrentVideoDevice(currentVideoDevice)
        } catch (error: any) {
          console.log(
            'There was an error connecting to the session:',
            error.code,
            error.message,
          )
        }
      })
    }
  }, [session, myUserName])

  const leaveSession = useCallback(() => {
    if (session) {
      session.disconnect()
    }

    OV.current = new OpenVidu()
    setSession(undefined)
    setSubscribers([])
    setMySessionId('SessionA')
    setMyUserName('Participant' + Math.floor(Math.random() * 100))
    setMainStreamManager(undefined)
    setPublisher(undefined)
  }, [session])

  const switchCamera = useCallback(async () => {
    try {
      const devices = await OV.current.getDevices()
      const videoDevices = devices.filter(
        (device) => device.kind === 'videoinput',
      )

      if (videoDevices && videoDevices.length > 1) {
        const newVideoDevice = videoDevices.filter(
          (device) => device.deviceId !== currentVideoDevice.deviceId,
        )

        if (newVideoDevice.length > 0) {
          const newPublisher = OV.current.initPublisher(undefined, {
            videoSource: newVideoDevice[0].deviceId,
            publishAudio: true,
            publishVideo: true,
            mirror: true,
          })

          if (session) {
            await session.unpublish(mainStreamManager)
            await session.publish(newPublisher)
            setCurrentVideoDevice(newVideoDevice[0])
            setMainStreamManager(newPublisher)
            setPublisher(newPublisher)
          }
        }
      }
    } catch (e) {
      console.error(e)
    }
  }, [currentVideoDevice, session, mainStreamManager])

  const deleteSubscriber = useCallback((streamManager: any) => {
    setSubscribers((prevSubscribers) => {
      const index = prevSubscribers.indexOf(streamManager)
      if (index > -1) {
        const newSubscribers = [...prevSubscribers]
        newSubscribers.splice(index, 1)
        return newSubscribers
      } else {
        return prevSubscribers
      }
    })
  }, [])

  useEffect(() => {
    const handleBeforeUnload = () => {
      leaveSession()
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [leaveSession])

  const getToken = useCallback(async () => {
    return createSession(mySessionId).then((sessionId) =>
      createToken(sessionId),
    )
  }, [mySessionId])

  const createSession = async (sessionId: any) => {
    const response = await axios.post(
      APPLICATION_SERVER_URL + 'api/sessions',
      { customSessionId: sessionId },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    return response.data
  }

  const createToken = async (sessionId: any) => {
    const response = await axios.post(
      APPLICATION_SERVER_URL + 'api/sessions/' + sessionId + '/connections',
      {},
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    return response.data
  }

  return (
    <div className="container">
      {session === undefined ? (
        <div id="join">
          <div id="join-dialog" className="jumbotron vertical-center">
            <Flex marginBottom={'20px'}>
              <Text variant={'mediumLargeBold'}>비디오 세션에 참여하세요</Text>
            </Flex>

            <form className="form-group" onSubmit={joinSession}>
              <Flex flexDirection={'column'} gap={'20px'}>
                <Flex alignItems={'center'} width={'fit-content'}>
                  <Box width={'150px'}>
                    <Text>참석자:</Text>
                  </Box>
                  <input
                    className="form-control"
                    type="text"
                    id="userName"
                    value={myUserName}
                    onChange={handleChangeUserName}
                    required
                  />
                </Flex>
                <Flex alignItems={'center'} width={'fit-content'}>
                  <Box width={'150px'}>
                    <Text> 세션: </Text>
                  </Box>

                  <input
                    className="form-control"
                    type="text"
                    id="sessionId"
                    value={mySessionId}
                    onChange={handleChangeSessionId}
                    required
                  />
                </Flex>
              </Flex>

              <Flex justifyContent={'center'} marginTop={'20px'}>
                <RequestButton>
                  <input
                    className="btn btn-lg btn-success"
                    name="commit"
                    type="submit"
                    value="참석하기"
                  />
                </RequestButton>
              </Flex>
            </form>
          </div>
        </div>
      ) : null}

      {session !== undefined ? (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          backgroundColor={'black'}
          width={'100vw'}
          height={'100vh'}
          gap={'30px'}
        >
          {/* 화상채팅방 헤더 */}
          <Flex>
            <Text variant={'mediumLargeBold'} color={'white'}>
              {mySessionId} 번 화상채팅
            </Text>
          </Flex>

          {/* {mainStreamManager !== undefined ? (
            <div id="main-video" className="col-md-6">
              <UserVideoComponent streamManager={mainStreamManager} />1
            </div>
          ) : null} */}
          <Flex
            flexDirection={{ base: 'column', sm: 'row' }}
            gap={{ base: '47px', sm: '30px' }}
          >
            {publisher !== undefined ? (
              <Flex
                onClick={() => handleMainVideoStream(publisher)}
                flexDirection={'column'}
                gap={'20px'}
              >
                <UserVideoComponent streamManager={publisher} />
                <NicknameButton
                  nickname={
                    JSON.parse(publisher.stream.connection.data).clientData
                  }
                />
              </Flex>
            ) : null}
            {subscribers.map((sub) => (
              <Flex
                key={sub.id + mySessionId}
                onClick={() => handleMainVideoStream(sub)}
                flexDirection={'column'}
                gap={'20px'}
              >
                <UserVideoComponent streamManager={sub} />
                <NicknameButton
                  nickname={JSON.parse(sub.stream.connection.data).clientData}
                />
              </Flex>
            ))}
          </Flex>

          {/* footer 메뉴바 */}
          <Flex gap={'20px'}>
            <RequestButton
              iconName="phone_off"
              backgroundColor={'red'}
              onClick={leaveSession}
            />
            <RequestButton
              iconName="phone_off"
              backgroundColor={'red'}
              onClick={switchCamera}
            />
          </Flex>
        </Flex>
      ) : null}
    </div>
  )
}
