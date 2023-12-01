'use client'

import axios from 'axios'
import { OpenVidu, Session } from 'openvidu-browser'
import { useEffect, useState, useCallback, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import VideoRoomComponent from '../chat/src/components/VideoRoomComponent.js'
import { myNameState, sessionState } from 'utils/state.ts'

const APPLICATION_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://careerup.vercel.app/'
    : 'http://localhost:5001/'

export default function App() {
  const mySessionIdState: string = useRecoilValue(sessionState)
  const myUserNameState: string = useRecoilValue(myNameState)

  console.log('mySessionId, myUserName : ', mySessionIdState, myUserNameState)

  const [mySessionId, setMySessionId] = useState(mySessionIdState)

  console.log('mySessionId : ', mySessionId)

  const [myUserName, setMyUserName] = useState(myUserNameState)
  const [session, setSession] = useState<Session>()
  const [toggleSession, setToggleSession] = useState<Boolean>(false)

  const OV = useRef(new OpenVidu())

  const handleSession = useCallback(() => {
    setToggleSession(!toggleSession)
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
    setMySessionId('SessionA')
    setMyUserName('Participant' + Math.floor(Math.random() * 100))
  }, [session])

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
      <VideoRoomComponent
        user={myUserName}
        handleSession={handleSession}
        sessionName={mySessionId}
      />
    </div>
  )
}
