import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Badge from './components/badge/Badge'
import Banner from './components/banner/index'
import Card from './components/card/index'
import './index.css'
import customLogo from './components/card/logoipsum-421.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Badge>Badge</Badge>
      <br/>
      <Banner>
        <Banner.Title>Congratulations!</Banner.Title>
        <Banner.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Description>
      </Banner>
      <br />
      <Card>
        <Card.Icon></Card.Icon>
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Description>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Description>
      </Card>
  </StrictMode>
)