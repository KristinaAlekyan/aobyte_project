import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authSelector, fetchLogin } from "../../redux/userSlice";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const isAuth = useSelector(authSelector);

    const validateForm = () => {
        return (email.length > 0 && password.length > 0)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            email: email,
            password: password
        }

        const user = dispatch(fetchLogin(data));

        if (user.payload && user.payload.token) {
            console.log("user", user)
            localStorage.setItem('token', user.payload.token);
        }
    }

    if (isAuth) {
        navigate('/products')
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
