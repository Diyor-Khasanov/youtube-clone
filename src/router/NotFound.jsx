import { BadgeX, Home, ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">

        <div className="relative mb-8">
          <h1 className="text-[120px] md:text-[150px] font-black text-red-600/10 absolute inset-0 flex items-center justify-center select-none">
            404
          </h1>
          <div className="relative flex items-center justify-center gap-2 md:gap-4">
            <span className="text-7xl md:text-9xl font-bold text-gray-800">4</span>
            <div className="bg-red-600 p-4 md:p-6 rounded-3xl rotate-12 shadow-xl animate-bounce">
              <BadgeX className="w-12 h-12 md:w-20 md:h-20 text-white" />
            </div>
            <span className="text-7xl md:text-9xl font-bold text-gray-800">4</span>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Sahifa topilmadi!
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Siz qidirayotgan sahifa o'chirilgan, nomi o'zgartirilgan yoki vaqtincha mavjud bo'lmasligi mumkin.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/dashboard"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-red-200 hover:bg-red-700 hover:-translate-y-1 transition-all active:scale-95"
          >
            <Home size={20} />
            Bosh sahifaga qaytish
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-100 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-all"
          >
            <ArrowLeft size={20} />
            Orqaga
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
