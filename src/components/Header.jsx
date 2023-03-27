import React from 'react'
import { Title, SearchByDate, SearchByName, AddExpense, MainBody } from './index'

const Header = ({searchByName, setSearchByName, searchByDate, setSearchByDate}) => {
  return (
    <div className='bg-white w-full fixed top-0 left-0 right-0 z-10 '>
        <div className='flex flex-col sm:flex-row items-start justify-between max-w-6xl mx-auto p-2 sm:p-4'>
            <div className=' mb-5 sm:mb-0'>
                <Title />
            </div>
            <div className='flex flex-col gap-3 sm:flex-row justify-center items-center'>
              <div className='flex gap-1 items-center justify-center'>
                  <SearchByDate
                    searchByDate={searchByDate}
                    setSearchByDate={setSearchByDate}
                  />

                  <SearchByName 
                    searchByName={searchByName}
                    setSearchByName={setSearchByName}
                  /> 
                </div>
                <AddExpense />
            </div>
        </div>
    </div>
  )
}

export default Header