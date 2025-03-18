import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card_animated.css'

function Card3() {
  return (
    <Card style={{ width: '15rem' }} className='card-border'>
      <Card.Img variant="top" src= "sticker4.jpg" className='card_img'/>
      <Card.Body className='card-body'>
        <Card.Title className='card-name'>third</Card.Title>
        
        <Button variant="primary" className='cart'>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3;