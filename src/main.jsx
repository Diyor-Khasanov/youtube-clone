import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'
import App from './App.jsx'
const NotFound = lazy(() => import('./router/NotFound.jsx'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const VideoDetails = lazy(() => import('./pages/VideoDetails.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: (
      <Suspense>
          <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/vid/:id",
    element: (
      <Suspense>
          <VideoDetails />
      </Suspense>
    )
  },
  {
    path: '*',
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
)
