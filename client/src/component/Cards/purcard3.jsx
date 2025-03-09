import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../cssfile/purchase.css'


function Purcard3() {
  return (
    <Card style={{ width: '15rem' }} className='card-border1'>
      <Card.Img variant="top" src= "https://th.bing.com/th?id=OIP.jdt8VNtyICulU4jtOgoakAHaG5&w=259&h=241&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='card_img1'/>
      <Card.Body className='card-body1'>
        <Card.Title className='card-name1'>Ball</Card.Title>
        
        <Button variant="primary" className='cart1'>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Purcard3;