import React, { useRef, useEffect } from 'react'

interface OpenViduVideoProps {
  streamManager: any // Replace 'any' with the actual type of streamManager
}

const OpenViduVideoComponent: React.FC<OpenViduVideoProps> = ({
  streamManager,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (streamManager && videoRef.current) {
      streamManager.addVideoElement(videoRef.current)
    }
  }, [streamManager])

  return <video autoPlay={true} ref={videoRef} />
}

export default OpenViduVideoComponent
