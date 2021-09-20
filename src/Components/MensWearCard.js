import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../css/ProductCard.css';
import { useDispatch } from 'react-redux';
import { counterAction } from '../actions/index';

function MensWearCard(props) {
    const dispatch = useDispatch()

   
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgM} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
               <h5>Price: {props.price}</h5>
                </Card.Text>
                <Card.Text>
                <h5>Details: <h6>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.</h6></h5>
                </Card.Text>
                <Button variant="primary" className="add-to-cart" onClick={() => dispatch(counterAction(props))}>Add To Cart</Button>
            </Card.Body>
        </Card>
        </>
    )
}


export default MensWearCard;