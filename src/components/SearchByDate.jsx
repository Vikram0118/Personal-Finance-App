import React from 'react'
import '../index.css'

const SearchByDate = ({ searchByDate, setSearchByDate }) => {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
  
        <form onSubmit={onSubmit}>

          <div className="relative flex flex-col gap-2">
          <label
              htmlFor="SearchByDate"
              className="hidden"  
              >Search By Date
            </label>
            <input
              type="text"
              className='px-1 py-1 bg-transparent border-b-2 focus:border-blue-600 focus:outline-0 cursor-pointer caret-blue-600'
              id='SearchByDate'
              placeholder='🔍 Search By Date'
              value={searchByDate}
              onChange={(e) => { 
                setSearchByDate(e.target.value)
              }} 
              autoComplete='off'
              autoCorrect='off' />
          </div>
        </form>
    </div>
  )
}

export default SearchByDate