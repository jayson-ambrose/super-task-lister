import React, { useState } from "react";
import { Input, Button, Form } from "semantic-ui-react";

export default function Credentials() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="mainContainer">
            <Form onSubmit={console.log(username + ', ' + password)}>
                <Form.Field onChange= {(e) => setUsername(e.target.value)}>
                    <label>Username</label>
                    <Input placeholder ='username' />
                </Form.Field>
                <Form.Field onChange={(e) => setPassword(e.target.value)}>
                    <label>Password</label>
                    <Input placeholder ='password' type='password' />
                </Form.Field>
                <Button type='submit' primary>Login</Button>
            </Form>
        </div>
    )
}