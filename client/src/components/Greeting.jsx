import React from "react";
import { activeAccountAtom, loggedInAtom, nightMode } from "./lib/atoms";
import { useRecoilValue } from "recoil";

export default function Greeting () {

    const loggedIn = useRecoilValue(loggedInAtom)
    const activeAccount = useRecoilValue(activeAccountAtom)
    const nightModeOn = useRecoilValue(nightMode)

    const loggedOutMessage = "Welcome to my warm-up app, please login or create a profile with username and password to start tracking tasks."

    return(
        <div className='routeContent'>
            <p> {loggedIn ? `Welcome ${activeAccount.username}, you have ${activeAccount.lists.length} lists with a total of ${activeAccount.tasks.length} tasks assigned to you.` : loggedOutMessage} </p>
        </div>
    )
}