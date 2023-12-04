import React, { useState, useEffect } from "react";
import { Accordion } from "semantic-ui-react";
import AccordionEntry from "./AccordionEntry";

export default function AllTasks() {

    const [taskList, setTaskList] = useState([])
    const [activeIndex, setActiveIndex] = useState(null)

    useEffect(() => {
        fetch('/api/lists')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setTaskList(data)
        })
    },[])

    function handleActiveIndex (num) {
        activeIndex == num ? setActiveIndex(null) : setActiveIndex(num)
    }

    const displayLists = taskList.map((list) => {
        return(
            <AccordionEntry 
                key={list.id} 
                list={list}
                activeIndex={activeIndex} 
                handleActiveIndex={handleActiveIndex}/>
        )
    })

    return (
        <div>
            <h1>Today's Tasks</h1>
            <Accordion>
                {displayLists}
            </Accordion>
        </div>
    )
}
