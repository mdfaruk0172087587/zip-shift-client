import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/Router.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './context/AuthProvider.jsx'


AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#F5F8FA]'>
      <AuthProvider>
                  <RouterProvider router={router}></RouterProvider>

      </AuthProvider>
    </div>
  </StrictMode>,
)
