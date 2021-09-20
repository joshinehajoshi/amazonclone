import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../css/ProductCard.css';
import { useDispatch } from 'react-redux';
import { counterAction, quantityIncrementAction, quantityDecrementAction } from '../actions/index';

function MensWearCard(props) {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);


   
    return (
        <>
        <Card style={{ width: '21rem' }} className="product-card-div">
            <Card.Img variant="top" src={props.imgM} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
               <h5>Price: {props.price}</h5>
                </Card.Text>
                <Card.Text>
                <h6>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.</h6>
                </Card.Text>
                <Card.Text className="quantity-wrapper">
               <Button variant="dark" className="quantity-btn" ><i class="fa fa-minus" aria-hidden="true"></i></Button>
               <input className="quantity-input">{props.quantity}</input>
               <Button variant="dark" className="quantity-btn" ><i class="fa fa-plus" aria-hidden="true"></i></Button>
                </Card.Text>
                <Button variant="primary" className="add-to-cart" onClick={() => dispatch(counterAction(props))}>Add To Cart</Button>
            </Card.Body>
        </Card>
        </>
    )
}


export default MensWearCard;