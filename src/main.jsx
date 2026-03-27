import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Badge from './components/Badge'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Badge>Badge</Badge>
  </StrictMode>
)
