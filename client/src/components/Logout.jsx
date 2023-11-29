import React from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "semantic-ui-react";
import { loggedInAtom } from "./lib/atoms";

export default function Logout () {

    const setLoggedIn = useSetRecoilState(loggedInAtom)

    const handleLogout = () => {
        setLoggedIn(false)
        fetch('http://127.0.0.1:5555')
    }
    
    return(
        <Button color="red" onClick={() => handleLogout()}>Logout</Button>
    )
}