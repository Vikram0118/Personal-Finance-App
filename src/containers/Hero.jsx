import React, {useState} from 'react'
import { Header, MainBody } from '../components'

const Hero = ({loggedPerson}) => {

  const [searchByName, setSearchByName] = useState('')
  const [searchByDate, setSearchByDate] = useState('')

  return (
    <>
        <div className=''>
          <Header 
            searchByDate={searchByDate}
            setSearchByDate={setSearchByDate}
            searchByName={searchByName}
            setSearchByName={setSearchByName}
            loggedPerson={loggedPerson}
          />
        </div>
        <div className='mt-40 sm:mt-24 '>
          <MainBody
            searchByName={searchByName}
            searchByDate={searchByDate}
          />
        </div>
    </>
  )
}

export default Hero