import React from 'react';
import '../css/create-account.css';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function SignIn() {
    return (
        <div>
 <div className="create-account-div">
            <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="amazon-log" className="create-account-logo"></img>
            <Card style={{ width: '24rem' }} className="create-account-card" >
                <Card.Body>
                    <Card.Title className="card-title">Sign In</Card.Title>
                    <form action="">
                        <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label htmlFor="email">Email or mobile phone Number</Form.Label>
                            <Form.Control type="email" id="email" />
                        </Form.Group>
                        <Form.Group className="mt-3"> 
                        <Button variant="primary" type="submit" className="continue-btn">
                            Continue
                        </Button>
                        </Form.Group>
                        <Form.Group  controlId="formBasicPassword" className="form-small-text">
                        <Form.Text>
                        By continuing, you agree to Amazon's  <Link to="/SignIn" className="form-small-text1">Conditions of use</Link> and <Link>Privacy Notice.</Link>
                        </Form.Text>
                        </Form.Group>
                        <Form.Group  controlId="formBasicPassword" className="form-small-text">
                        <Form.Text>
                            <Link className="form-small-text">Need help?</Link>
                        </Form.Text>
                        </Form.Group>
       
                        </div>
                    </form>
                </Card.Body>
            </Card>
         
        </div>        </div>
    )
}

export default SignIn
