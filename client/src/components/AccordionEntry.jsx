import React from "react";
import { Accordion, Icon} from "semantic-ui-react";

export default function AccordionEntry ({ list, activeIndex, handleActiveIndex }) {

    const {id, title, created_at, tasks} = list

    const displayTasks = tasks.map((task)=> <p key={task.id}>{task.title}</p>)
    
    return (
        <>
          <Accordion.Title
            active={activeIndex === id}
            index={id}
            onClick={() => handleActiveIndex(id)}
          >
            <h2>{title} <Icon name='dropdown'/></h2>
          </Accordion.Title>
          <Accordion.Content
            active={activeIndex === id}>
                {displayTasks}
          </Accordion.Content>
        </>
    )

}