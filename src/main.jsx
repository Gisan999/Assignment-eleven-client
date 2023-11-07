import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { SkeletonTheme } from 'react-loading-skeleton'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor='#989494' highlightColor='#525252'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </SkeletonTheme>
  </React.StrictMode>,
)
