import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/index.css';

function Products(props) {
    return (
        <div>
            <Card className="card-first">
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <div className="img-wrapper">
                        <div className="img-div">
                        <img className="card-img" src={props.img1} alt="product-pic"></img>
                        <p>{props.p1}</p>
                        </div>
                        <div className="img-div">
                        <img className="card-img" src={props.img2} alt="product-pic"></img>
                        <p>{props.p2}</p>
                        </div>
                        <div className="img-div">
                        <img className="card-img" src={props.img3} alt="product-pic"></img>
                        <p>{props.p3}</p>
                        </div>
                        <div className="img-div">
                        <img className="card-img" src={props.img4} alt="product-pic"></img>
                        <p>{props.p4}</p>
                        </div>
                    </div>
                    <Link to={props.a1} className="see-more">See more </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Products
