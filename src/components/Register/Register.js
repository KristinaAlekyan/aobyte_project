import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Register/register.css";

export default function Register() {
    const [firstName, setFirstName] = useState("");    
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const [repeatPassword, setRepeatPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password,
            repeatPassword: repeatPassword
        }
        console.log("data", data);

        //send data as the POST request
        fetch('http://localhost:5000/registration', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            // Trying convert the React state to JSON and send it as the POST body
            body: JSON.stringify(data)
            }).then(function(response) {
                return response.json();
        });
  
    }

    return (
        <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="repeatPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
            </Form.Group>

            <Button onClick = {handleSubmit} block="true" size="lg" type="submit" disabled={!validateForm()}>
            Register
            </Button>
        </Form>
        </div>
    );
}