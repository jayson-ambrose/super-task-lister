import React, { useState } from "react";
import { activeAccountAtom } from "./lib/atoms";
import { useRecoilValue } from "recoil";

export default function MyTasks() {

    const activeAccount = useRecoilValue(activeAccountAtom)
    const [tasks, setTasks] = useState(activeAccount.tasks)

    const displayTasks = tasks?.map(task => <h1 key={task.id}>{task.title}</h1>)      

    return (
        <div>
            {displayTasks}
        </div>
    )
}