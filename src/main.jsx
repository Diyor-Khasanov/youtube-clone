import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import NotFound from './router/NotFound.jsx'
import Protected from './router/Protected.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { RouterProvider } from 'react-router'
import Notifications from './pages/Notifications.jsx'
import Profile from './pages/Profile.jsx'
import VideoDetails from './pages/VideoDetails.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
  {
    path: "/vid/:id",
    element: (
      <Protected>
        <VideoDetails />
      </Protected>
    )
  },
  {
    path: '/notifications',
    element: (
      <Protected>
        <Notifications />
      </Protected>
    ),
  },
  {
    path: '/profile',
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
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
