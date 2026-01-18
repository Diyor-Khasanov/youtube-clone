import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { fetchVideoDetails } from '../redux/api'
import { ArrowLeft, Clock, Utensils, ListChecks } from 'lucide-react'

const VideoDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading, err, videoDetails } = useSelector((state) => state.imageApp)

  useEffect(() => {
    dispatch(fetchVideoDetails(id))
  }, [dispatch, id])

  if (isLoading) return <Loading />
  if (err) return <h2 className="text-center text-red-600 mt-10">{err}</h2>

  const totalTime = videoDetails.prepTimeMinutes + videoDetails.cookTimeMinutes

  return (
    <div className='min-h-screen bg-gray-50 pb-10'>
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-4 font-medium"
        >
          <ArrowLeft size={20} /> Back to Meals
        </button>

        <div className='bg-white shadow-xl rounded-3xl overflow-hidden'>
          <div className='flex flex-col lg:flex-row'>

            <div className='lg:w-1/3 p-6 md:p-8 bg-zinc-50 border-r border-gray-100'>
              <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                {videoDetails.name}
              </h1>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src={videoDetails.image}
                  alt={videoDetails.name}
                  className='w-full h-[300px] lg:h-[400px] object-cover hover:scale-105 duration-500'
                />
              </div>

              <div className='grid grid-cols-1 gap-4 bg-white p-5 rounded-2xl shadow-sm border border-red-50'>
                <div className='flex items-center gap-3 text-gray-700'>
                  <Clock className='text-red-600' size={20} />
                  <span>Prep: <strong>{videoDetails.prepTimeMinutes} min</strong></span>
                </div>
                <div className='flex items-center gap-3 text-gray-700'>
                  <Utensils className='text-red-600' size={20} />
                  <span>Cook: <strong>{videoDetails.cookTimeMinutes} min</strong></span>
                </div>
                <div className='pt-3 border-t border-gray-100 font-bold text-red-600 flex justify-between'>
                  <span>Total Time:</span>
                  <span>
                    {totalTime < 60 ? `${totalTime} min` : `${Math.floor(totalTime / 60)}h ${totalTime % 60}min`}
                  </span>
                </div>
              </div>
            </div>

            <div className='lg:w-2/3 p-6 md:p-10'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                <div>
                  <div className='flex items-center gap-2 mb-4 border-b-2 border-red-600 pb-2 w-max'>
                    <ListChecks className='text-red-600' />
                    <h2 className='text-xl font-bold text-gray-800 uppercase tracking-wider'>Ingredients</h2>
                  </div>
                  <ul className='space-y-3'>
                    {videoDetails.ingredients?.map((value, index) => (
                      <li key={index} className='flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors'>
                        <span className='bg-red-600 text-white min-w-[24px] h-6 flex items-center justify-center rounded-full text-xs font-bold'>
                          {index + 1}
                        </span>
                        <span className='text-gray-700'>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className='flex items-center gap-2 mb-4 border-b-2 border-red-600 pb-2 w-max'>
                    <Utensils className='text-red-600' />
                    <h2 className='text-xl font-bold text-gray-800 uppercase tracking-wider'>Instructions</h2>
                  </div>
                  <div className='space-y-4 text-gray-700'>
                    {videoDetails.instructions?.map((value, index) => (
                      <div key={index} className='relative pl-6 border-l-2 border-red-100'>
                        <div className='absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-sm'></div>
                        <p className='font-medium leading-relaxed'>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
