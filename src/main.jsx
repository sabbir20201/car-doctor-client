import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import AuthProvider from './AuthProvider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='max-w-7xl mx-auto'>
        <React.StrictMode>
            <AuthProvider>
                <RouterProvider router={Routes}></RouterProvider>
            </AuthProvider>
        </React.StrictMode>,
    </div>
)
