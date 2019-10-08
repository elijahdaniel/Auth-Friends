import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

function App() {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1>Friends</h1>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/friends'>Friends</Link>
            </li>
          </ul>
        </header>
      </div>

      <PrivateRoute exact path='/friends' component={Friends} />
      <Route path='/login' component={Login} />
    </>
  )
}

export default App
