import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Badge from './components/badge/Badge'
import Banner from './components/banner/index'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Badge>Badge</Badge>
      <br/>
      <Banner>
        <Banner.Title>Congratulations!</Banner.Title>
        <Banner.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Description>
      </Banner>
  </StrictMode>
)
