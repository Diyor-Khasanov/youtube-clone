import React from 'react'
import { useParams } from 'react-router-dom'

const VideoDetails = () => {
  const { id } = useParams()

  return <div>VideoDetails {id}</div>
}

export default VideoDetails
