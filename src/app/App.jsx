import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/app/global.css'
import HomePage from '@/pages/aperture'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
