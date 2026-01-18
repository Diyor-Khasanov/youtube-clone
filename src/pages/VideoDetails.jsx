import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { fetchVideoDetails } from '../redux/api'

const VideoDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, err, videoDetails } = useSelector((state) => state.imageApp)

  useEffect(() => {
    dispatch(fetchVideoDetails(id))
  }, [dispatch, id])

  if (isLoading) {
    return <Loading />
  }

  if (err) {
    return <h2>{err}</h2>
  }

  return (
    <div className='flex gap-10 p-8 max-h-[600px]'>
      <div>

        <h1>Name: {videoDetails.name}</h1>
        <img src={videoDetails.image} alt={videoDetails.name} className='w-[500px] ' />
      </div>
      <h2>Ingredients: {videoDetails.ingredients?.map((value, index) => {
        return (
          <div className='flex justify-between items-center mt-2 rounded-3xl'>
            <span>{index + 1}. {value}</span>
          </div>
        )
      })}</h2>
      <div>
        <h2>Instructions to cook: {videoDetails.instructions?.map((value, index) => {
          return (
            <div className='flex justify-between items-center font-semibold mt-2 rounded-3xl'>
              <span>{index + 1}. {value}</span>
            </div>
          )
        })}</h2>
      </div>
      <div>
        <p>Time to Preparation: {videoDetails.prepTimeMinutes} min</p>
        <p>Time to Cook: {videoDetails.cookTimeMinutes} min</p>
        {videoDetails.prepTimeMinutes + videoDetails.cookTimeMinutes < 60 ? <p>Time Spend: {videoDetails.prepTimeMinutes + videoDetails.cookTimeMinutes} min</p> : <p>Time Spend: {Math.floor((videoDetails.prepTimeMinutes + videoDetails.cookTimeMinutes) / 60)}h {videoDetails.prepTimeMinutes + videoDetails.cookTimeMinutes - 60}min</p>}
      </div>

    </div>
  )
}

export default VideoDetails
