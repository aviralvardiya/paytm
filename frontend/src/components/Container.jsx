import React from 'react'

function Container({children}) {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center bg-gray-200' >{children}</div>
  )
}

export default Container