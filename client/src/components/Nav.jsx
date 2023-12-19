import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { activeAccountAtom } from "./lib/atoms";
import { useRecoilValue } from "recoil";

export default function Nav() {

    const [activeItem, setActiveItem] = useState('myTasks')
    const activeAccount = useRecoilValue(activeAccountAtom)

    const navigate = useNavigate()

    const handleMyTasksClick = () => {
        setActiveItem('myTasks')
        navigate('/mytasks')
    }

    return(
        <Menu inverted>
            <Menu.Item
                color={activeItem === 'myTasks' ? 'blue' : null}
                name='myTasks'
                active={activeItem === 'myTasks'}
                onClick={() => handleMyTasksClick()}>
                    My Tasks
            </Menu.Item>
            <Menu.Item
                color={activeItem === 'createTasks' ? 'blue' : null}
                name='createTasks'
                active={activeItem === 'createTasks'}
                onClick={()=>setActiveItem('createTasks')}>
                    New Task
            </Menu.Item>
            <Menu.Item
                color={activeItem === 'userProfile' ? 'blue' : null}
                name={'userProfile'}
                active={activeItem === 'userProfile'}
                onClick={()=>setActiveItem('userProfile')}>
                    {activeAccount.username}
            </Menu.Item>
        </Menu>
    )
}