import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { activeAccountAtom } from "./lib/atoms";
import { useRecoilValue } from "recoil";

export default function Nav() {

    const [activeItem, setActiveItem] = useState('myTasks')
    const activeAccount = useRecoilValue(activeAccountAtom)

    return(
        <Menu inverted color="blue">
            <Menu.Item
                name='myTasks'
                active={activeItem === 'myTasks'}
                onClick={()=>setActiveItem('myTasks')}>
                    My Tasks
            </Menu.Item>
            <Menu.Item
                name='createTasks'
                active={activeItem === 'createTasks'}
                onClick={()=>setActiveItem('createTasks')}>
                    New Task
            </Menu.Item>
            <Menu.Item
                name={'userProfile'}
                active={activeItem === 'userProfile'}
                onClick={()=>setActiveItem('userProfile')}>
                    {activeAccount.username}
            </Menu.Item>
        </Menu>
    )
}