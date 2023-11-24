import React from "react";
import { Input, Button } from "semantic-ui-react";

export default function Credentials() {

    return (
        <div className="mainContainer">
            <Input placeholder="Username"/>
            <Input placeholder="Password" type="password"/>
            <div>
                <Button primary>Login</Button>
                <Button primary>Create Profile</Button>
            </div>
        </div>
    )
}