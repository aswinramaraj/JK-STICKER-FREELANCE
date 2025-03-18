import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card_animated.css'

function Card6() {
  return (
    <Card style={{ width: '15rem' }} className='card-border'>
      <Card.Img variant="top" src= "sticker7.jpg" className='card_img'/>
      <Card.Body className='card-body'>
        <Card.Title className='card-name'>six</Card.Title>
        
        <Button variant="primary" className='cart'>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Card6;