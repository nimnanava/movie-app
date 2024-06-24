import axios from 'axios'
import React, { useState } from 'react'

function Result({result, openDetail}) {


  return (
    <div className='result' onClick={e => openDetail(result.imdbID)}>
      <div className=' border border-dark border-4'>
      <img src={result.Poster} />
      </div>
      <div className=' bg-dark text-white p-2'>
      <h5>{result.Title}</h5>
      </div>
    </div>
  )
} 

export default Result


