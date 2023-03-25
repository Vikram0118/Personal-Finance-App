import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, Hero } from './containers'

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route exact path='/' element={<Login />}> </Route>
      </Routes>
      {/* <Hero /> */}
    </div>
  )
}

export default App