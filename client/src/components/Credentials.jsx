import React, { useState } from "react";
import { Input, Button, Form } from "semantic-ui-react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { activeAccountAtom, loggedInAtom } from "./lib/atoms";

export default function Credentials() {

    const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)

    const setActiveAccount = useSetRecoilState(activeAccountAtom)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin () {

        const loginCredentials = {username: username, password: password}
        
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(loginCredentials)
        })
        .then(resp => {
            if(resp.ok) {
                resp.json()
                .then(data => {
                    setUsername('')
                    setPassword('')
                    setActiveAccount(data)
                    setLoggedIn(true)
                })
            }
        })
    }

    return (
        <div className="mainContainer">
            <Form onSubmit={() => handleLogin()}>
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