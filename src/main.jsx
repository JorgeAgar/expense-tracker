import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Movement } from './components/Movement'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Movement />
  </StrictMode>,
)
