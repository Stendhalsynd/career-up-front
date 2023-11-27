// 'use client'

import React from 'react'
import OpenViduVideoComponent from './OvVideo.tsx'
import './UserVideo.css'

interface UserVideoProps {
  streamManager: any // Replace 'any' with the actual type of streamManager
}

const UserVideoComponent: React.FC<UserVideoProps> = ({ streamManager }) => {
  return (
    <div>
      {streamManager !== undefined ? (
        <div className="streamcomponent">
          <OpenViduVideoComponent streamManager={streamManager} />
        </div>
      ) : null}
    </div>
  )
}

export default UserVideoComponent
