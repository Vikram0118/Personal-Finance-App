import React from 'react'

const SearchByName = ({searchByName, setSearchByName}) => {

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
              >Search By Name
            </label>
            <input
              type="text"
              className="px-1 py-1 bg-transparent border-b-2 focus:border-blue-500 focus:outline-0 cursor-pointer caret-blue-600 focus:placeholder-transparent"
              id='SearchByDate'
              placeholder='🔍 Search By Name'
              value={searchByName}
              onChange={(e) => { 
                setSearchByName(e.target.value)
              }} 
              autoComplete='off'
              autoCorrect='off' />
          </div>
        </form>
    </div>
  )
}

export default SearchByName