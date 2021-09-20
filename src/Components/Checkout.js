import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button} from 'react-bootstrap';
import '../css/cart.css'

export default function Checkout(props) {
    const {counterReducer} = useSelector((state) => state)
    console.log(counterReducer);
    console.log(counterReducer.cardData);
    return (
        <div className="cart-wrapper">
            <h1>Items in Cart</h1>
            <div className="cart-items">
            {
                counterReducer.cardData.map((a) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={a.imgM} />
                <Card.Body>
                    <Card.Title>Price: {a.price}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Remove From Cart</Button>
                </Card.Body>
            </Card>
                    )
                })
            }
            </div>
            
        </div>
    )
}
