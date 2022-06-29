import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return (email.length > 0 && password.length > 0)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password
        }

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            //  Convert the React state to JSON and send it as the POST body
            body: JSON.stringify(data)
        }).then((response) => response.json()).then((response) => {
            console.log(response);
            //setLogedUser({email})
        })
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
                <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login
