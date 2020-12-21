import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

type myState = { }
type myProps = { title: any, img: any, url: any }

class CardRelease extends React.Component<myProps, myState> {

  static defaultProps = {
    title: 'Stranger',
    img: require("../assets/images/200x200.png"),
    url: "https://github.com/Skalwalker"
  };

  render () {
    return (
      <Col md={4} className='mb-3'>
        <a target="_blank" href={this.props.url}>
        <Card style={{ minHeight: '30vh' }}>
          <Card.Body style={{ padding: '0.8rem' }}>
            <Card.Img variant="top" src={this.props.img}/>
            <Card.Text className='mt-2'>
              {this.props.title}
            </Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>
    )
  }
}

export default CardRelease;

// require("../assets/images/200x200.png")
