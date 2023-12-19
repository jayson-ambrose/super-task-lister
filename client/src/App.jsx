import React, { useEffect } from 'react'
import Credentials from './components/Credentials'
import Logout from './components/Logout'
import { useRecoilState } from 'recoil'
import { loggedInAtom, activeAccountAtom } from './components/lib/atoms'
import { Routes, Route } from 'react-router-dom'
import Greeting from './components/Greeting'
import Nav from './components/Nav'
import MyTasks from './components/MyTasks'

function App() {

  const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
  const [activeAccount, setActiveAccount] = useRecoilState(activeAccountAtom)

  console.log(activeAccount)

  useEffect(() => {
    fetch('/api/checksession')
    .then(resp => {
      if(resp.ok) {
        resp.json()
        .then(data => {
          setLoggedIn(true)
          setActiveAccount(data)
        })
      }
    })
  }, [])

  return (
    <div className='headerContainer'>
      <h1>Welcome to Super Task Lister</h1>      
      {loggedIn ? <Logout/> : <Credentials/>}
      {loggedIn ? <Nav/> : null}
      <Routes>
        <Route path='/' element={<Greeting/>}/>      
        <Route path='/mytasks' element={<MyTasks/>}/>      
      </Routes>   
    </div>
  )
}

export default App
