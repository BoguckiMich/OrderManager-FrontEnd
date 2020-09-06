import React from "react";
import { Link } from 'react-router-dom';
import { Card, Form, Input, Button } from './AuthForm';
import axios from "axios";

function Login() {

    const handleLogin = async () => {
        const request = await axios("http://localhost:8080/");
    }

    return (
        <Card>
            <Form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="password" />
                <Button onClick={handleLogin}>Sign In</Button>
            </Form>
            {/*<Link to="/signup">Don't have an account?</Link>*/}
        </Card>
    );
}

export default Login;