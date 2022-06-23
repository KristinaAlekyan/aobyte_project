import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login/login.css";


export default function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const validateForm = () => {
        return (email.length > 0 && password.length > 0)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email : email,
            password : password
        }
        
        console.log("data", data);

        //send data as the POST request
        fetch('http://localhost:5000/login',
        {headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}})
        .then((response) => response.json())
        .then((res) => {
            console.log("Fetched user", res)
        });
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
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
                <Button block="true" size="lg" type="submit" disabled={!validateForm()}
                        >
                    Login
                </Button>
            </Form>
        </div>
    );
}
