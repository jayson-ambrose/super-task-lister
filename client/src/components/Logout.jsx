import React from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "semantic-ui-react";
import { activeAccountAtom, loggedInAtom } from "./lib/atoms";

export default function Logout () {

    const setLoggedIn = useSetRecoilState(loggedInAtom)
    const setActiveAccount = useSetRecoilState(activeAccountAtom)

    const handleLogout = () => {
        fetch('http://127.0.0.1:5555/logout', {
            method: 'DELETE'
        })
        .then(resp => {
            if(resp.ok) {
                setLoggedIn(false)
                setActiveAccount(null)
            }
        })
    }
    
    return(
        <Button color="red" onClick={() => handleLogout()}>Logout</Button>
    )
}