import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login/login.css";
import {LOGIN_STATES} from "../../constants";
import {Navigate} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
    }

    validateForm = () => {
        return (this.state.email.length > 0 && this.state.password.length > 0)
    }

    updateEmail = email => {
        this.setState({email: email});
    }
    updatePassword = password => {
        this.setState({password: password});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        let email = this.state.email;
        let password = this.state.password;

        if (this.props.loginState === LOGIN_STATES.FALSE)
            alert("Incorrect email or password");
        else if (this.props.loginState === LOGIN_STATES.TRUE)
            return <Navigate to="/user/profile"/>
        return (
            <div className="Login">
                <Form onSubmit={
                    this.handleSubmit
                }>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => this.updateEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => this.updatePassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block="true" size="lg" type="submit" disabled={!this.validateForm()}
                            onClick={() => this.props.login(email, password)}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}


export default Login;