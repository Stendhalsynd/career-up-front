import axios from 'axios'
import OpenViduSession from 'openvidu-react'
import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [mySessionId, setMySessionId] = useState('SessionA')
  const [myUserName, setMyUserName] = useState(
    'OpenVidu_User_' + Math.floor(Math.random() * 100),
  )
  const [token, setToken] = useState(undefined)
  const [session, setSession] = useState(undefined)

  const APPLICATION_SERVER_URL =
    process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5001/'

  const handlerJoinSessionEvent = () => {
    console.log('Join session')
  }

  const handlerLeaveSessionEvent = () => {
    console.log('Leave session')
    setSession(undefined)
  }

  const handlerErrorEvent = () => {
    console.log('Leave session')
  }

  const handleChangeSessionId = (e) => {
    setMySessionId(e.target.value)
  }

  const handleChangeUserName = (e) => {
    setMyUserName(e.target.value)
  }

  const joinSession = async (event) => {
    event.preventDefault()
    if (mySessionId && myUserName) {
      const sessionToken = await getToken()
      setToken(sessionToken)
      setSession(true)
    }
  }

  useEffect(() => {
    const initializeSession = async () => {
      if (mySessionId && myUserName) {
        const sessionToken = await getToken()
        setToken(sessionToken)
        setSession(true)
      }
    }

    initializeSession()
  }, [mySessionId, myUserName])

  async function getToken() {
    const sessionId = await createSession(mySessionId)
    return await createToken(sessionId)
  }

  async function createSession(sessionId) {
    const response = await axios.post(
      APPLICATION_SERVER_URL + 'api/sessions',
      { customSessionId: sessionId },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    return response.data // The sessionId
  }

  async function createToken(sessionId) {
    const response = await axios.post(
      APPLICATION_SERVER_URL + 'api/sessions/' + sessionId + '/connections',
      {},
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    return response.data // The token
  }

  return (
    <div>
      {session === undefined ? (
        <div id="join">
          <div id="join-dialog">
            <h1> Join a video session </h1>
            <form onSubmit={joinSession}>
              <p>
                <label>Participant2: </label>
                <input
                  type="text"
                  id="userName"
                  value={myUserName}
                  onChange={handleChangeUserName}
                  required
                />
              </p>
              <p>
                <label> Session: </label>
                <input
                  type="text"
                  id="sessionId"
                  value={mySessionId}
                  onChange={handleChangeSessionId}
                  required
                />
              </p>
              <p>
                <input name="commit" type="submit" value="JOIN" />
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div id="session">
          <OpenViduSession
            id="opv-session"
            sessionName={mySessionId}
            user={myUserName}
            token={token}
            joinSession={handlerJoinSessionEvent}
            leaveSession={handlerLeaveSessionEvent}
            error={handlerErrorEvent}
          />
        </div>
      )}
    </div>
  )
}

export default App
