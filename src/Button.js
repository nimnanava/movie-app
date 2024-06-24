import React from 'react'

function Button({click}) {
  return (
    <div className=' m-2 mb-5'>
        <button onClick={click} className=' btn btn-danger'>Serch here</button>
    </div>
  )
}

export default Button
