import React, { useState, useEffect } from "react";
import { Accordion } from "semantic-ui-react";
import AccordionEntry from "./AccordionEntry";

export default function AllTasks() {

    const [taskList, setTaskList] = useState([])
    const [activeIndex, setActiveIndex] = useState(null)

    useEffect(() => {
        fetch('http://127.0.0.1:5555/lists')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setTaskList(data)
        })
    },[])

    function handleActiveIndex (num) {
        setActiveIndex(num)
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

{/* <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What kinds of dogs are there?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion> */}