import React from 'react'

function Detail({selected,Close}) {
  return (
    <div className='d-flex align-items-center justify-content-center'>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 text-center'>
            <img src={selected.Poster} alt='Poster'/>
          </div>
          <div className='col-12 col-md-6 text-white'>
            <h2>{selected.Title}</h2>
            <p>relese data : {selected.Year}</p>
            <p>{selected.Plot}</p>

             <button onClick={Close} className='btn btn-danger'>Close</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Detail
