import React,{useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, Hero } from './containers'
import GlobalProvider from './GlobalContext/GlobalProvider'


const App = () => {

  let docTitle = document.title;

  window.addEventListener("blur" ,() => {
    document.title ="Hire Me 😄";
  })
  window.addEventListener("focus", () => {
    document.title = docTitle;
  })

  const [loggedPerson, setLoggedPerson] = useState('')

  return (
    <div className='overflow-x-hidden'>
      <GlobalProvider>
        <Routes>
          <Route exact path='/' element={<Login  setLoggedPerson={setLoggedPerson} />}> </Route>

          <Route exact path='Expense' element={<Hero loggedPerson={loggedPerson} />}> </Route>
        </Routes> 
      </GlobalProvider>
    </div>
  )
}

export default App