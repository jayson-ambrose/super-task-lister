import React, { useState } from 'react'
import './styles/App.css'
import { Button } from 'semantic-ui-react'
import AllTasks from './components/AllTasks'
import Credentials from './components/Credentials'

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className='mainContainer'>
      <h1>Welcome to Super Task Lister</h1>
      <div>
        <Credentials/>
      </div>
      {loggedIn ? <h1>Hello World</h1> : <AllTasks/>}
      
    </div>
  )
}

export default App
