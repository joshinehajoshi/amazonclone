import React from 'react';
import '../css/create-account.css';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CreateAccount() {
    return (
        <div className="create-account-div">
            <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="amazon-log" className="create-account-logo"></img>
            <Card style={{ width: '24rem' }} className="create-account-card" >
                <Card.Body>
                    <Card.Title className="card-title">Create Account</Card.Title>
                    <form action="">
                        <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label htmlFor="name">Your Name</Form.Label>
                            <Form.Control type="text" id="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label htmlFor="mobile">Mobile Number</Form.Label>
                            <Form.Control type="number" id="mobile" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label htmlFor="email">Email (Optional)</Form.Label>
                            <Form.Control type="email" id="email" />
                        </Form.Group>

                        <Form.Group  controlId="formBasicPassword">
                            <Form.Label htmlFor="pass-word">Password</Form.Label>
                            <Form.Control type="password" id="pass-word" />
                        </Form.Group>
                        <Form.Text className="text-muted">
                        <i class="fa fa-info" aria-hidden="true"></i> Passwords must be at least 6 characters.
                        </Form.Text>
                        <Form.Group  controlId="formBasicPassword" className="form-small-text">
                        <Form.Text>
                         We will send you a text to verify your phone.
                        </Form.Text><br />
                        <Form.Text>
                        Message and Data rates may apply.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group className="mt-3"> 
                        <Button variant="primary" type="submit" className="continue-btn">
                            Continue
                        </Button>
                        </Form.Group>
                        <Form.Group  controlId="formBasicPassword" className="form-small-text">
                        <Form.Text>
                        Already have an account? <Link to="/SignIn">Sign in</Link>
                        </Form.Text>
                        </Form.Group>
       
                        </div>
                    </form>
                </Card.Body>
            </Card>
         
        </div>
    )
}

export default CreateAccount;
