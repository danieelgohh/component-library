import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import classNames from 'classnames'
import Badge from './components/badge/Badge'
import Banner from './components/banner/index'
import Card from './components/card/index'
import './index.css'
import Testimonial from './components/testimonial/index'

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
      <br />
      <Testimonial withImage={true}>
        {(isImage, src) => {
          return (
            <>
              <div className={classNames("testimonial-details", {"testimonial-details-img": isImage})}>
                <Testimonial.Image src={src}></Testimonial.Image>
                <Testimonial.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial.Content>
                <Testimonial.Author name={"May Andersons"} role={"Workcation, CTO"}></Testimonial.Author>
              </div>
            </>
          )
        }}
      </Testimonial>
  </StrictMode>
)