import React from 'react'

const Search = ({handleInput, SearchResult}) => {
  return (
    <div>

      <input type='text' name='movie' placeholder='Search Movie.....' className='w-50 p2 mt-2  mb-2'
      onChange={handleInput} 
      
      />


     
    </div>
  )
}

export default Search