import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'
import Backgroud from '../components/Backgroud'

class Home extends React.Component {
  render() {
    return (
      <Backgroud>
      <Carousel prevIcon={(<div></div>)} nextIcon={(<div></div>)}>
        <Carousel.Item>
          <div className="d-block w-100" style={{ height: '92vh' }} >
            <div style={style.nameDiv}>
              <h1 style={style.nameStyle}>RENATO NOBRE</h1>
            </div>
          </div>
          <Carousel.Caption className='mb-5'>
            <p>
              Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay 
              Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay 
              Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay Renato gay 
            </p>
            <Button size='lg' variant="outline-light" className='mb-3'>
              Learn More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Backgroud>
    )
  }
}

const style = {
  nameDiv: {
    height: '90%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
  nameStyle: {
    fontSize: '96px',
    color: '#FFFFFF'
  }
}

export default Home;