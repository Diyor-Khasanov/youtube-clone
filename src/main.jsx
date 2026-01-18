import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'
import App from './App.jsx'
const Register = lazy(() => import('./pages/Register.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const NotFound = lazy(() => import('./router/NotFound.jsx'))
const Protected = lazy(() => import('./router/Protected.jsx'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const Notifications = lazy(() => import('./pages/Notifications.jsx'))
const Profile = lazy(() => import('./pages/Profile.jsx'))
const VideoDetails = lazy(() => import('./pages/VideoDetails.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: (
      <Suspense>
        <Register />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Suspense>
        <Protected>
          <Dashboard />
        </Protected>
      </Suspense>
    ),
  },
  {
    path: "/vid/:id",
    element: (
      <Suspense>
        <Protected>
          <VideoDetails />
        </Protected>
      </Suspense>
    )
  },
  {
    path: '/notifications',
    element: (
      <Suspense>
        <Protected>
          <Notifications />
        </Protected>
      </Suspense>
    ),
  },
  {
    path: '/profile',
    element: (
      <Suspense>
        <Protected>
          <Profile />
        </Protected>
      </Suspense>
    ),
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
