import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import '../css/ProductCard.css';
import { useDispatch } from 'react-redux';
import { counterAction, quantityIncrementAction, quantityDecrementAction } from '../actions/index';

function MensWearCard(props) {
    // console.log("props",props.setItems.color)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);


   
    return (
        <>
        <Card style={{ width: '18rem' }} className="product-card-div">
            <Card.Img variant="top" src={props.imgM} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="Badge-wrapper">
                <Badge className="Badge" pill bg="dark">
               <h5>{props.price}</h5>
                </Badge>
                </Card.Text>
                <Card.Text className="color-code">
                    {
                        props.setItems.color == "Cream"?
                         <> <i class="fa fa-circle circle-cream" aria-hidden="true"></i><h4>{props.setItems.color} </h4> </>:   
                        props.setItems.color == "Black" ? 
                         <> <i class="fa fa-circle circle-black" aria-hidden="true"></i><h4>{props.setItems.color} </h4></> : 
                        props.setItems.color == "Green" ? 
                         <> <i class="fa fa-circle circle-green" aria-hidden="true"></i><h4>{props.setItems.color} </h4></>
                         : 
                        props.setItems.color == "Pink" ? 
                         <> <i class="fa fa-circle circle-pink" aria-hidden="true"></i><h4>{props.setItems.color} </h4></>
                         : 
                        props.setItems.color == "Gray" ? 
                         <> <i class="fa fa-circle circle-gray" aria-hidden="true"></i><h4>{props.setItems.color} </h4></>
                         : 
                        props.setItems.color == "Blue" ? 
                         <> <i class="fa fa-circle circle-blue" aria-hidden="true"></i><h4>{props.setItems.color} </h4></>
                         : 
                         <> <i class="fa fa-circle circle-white" aria-hidden="true"></i><h4>{props.setItems.color} </h4></>
                    }
               
                </Card.Text>
                <Card.Text className="discount-wrapper">
                <h6>
                Discount: {props.setItems.discount}% </h6>
                </Card.Text>
                <Card.Text>
                <h6>
                Some quick example text to build on the card title </h6>
                </Card.Text>
                <Card.Text className="quantity-wrapper mt-2">
               <Button variant="dark" className="quantity-btn" ><i class="fa fa-minus" aria-hidden="true"></i></Button>
               <input className="quantity-input">{props.quantity}</input>
               <Button variant="dark" className="quantity-btn" ><i class="fa fa-plus" aria-hidden="true"></i></Button>
                </Card.Text>
                <Button variant="primary" className="add-to-cart mt-2" onClick={() => dispatch(counterAction(props))}>Add To Cart</Button>
                <Button variant="primary" className="add-to-cart mt-2 buy-now" >Buy Now</Button>
            </Card.Body>
        </Card>
        </>
    )
}


export default MensWearCard;