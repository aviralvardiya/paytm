import React from 'react'
import InitialsIcon from './InitialsIcon'

function Navbar({user}) {
  return (
    <div className='flex justify-between p-4 border-b-2'>
        <h1 className='text-3xl font-bold'>PayTM clone</h1>
        <div className='flex text-xl gap-4 items-center'>
            <h2>Hello, {user.firstName}</h2>
            <InitialsIcon user={user}/>
        </div>
    </div>
  )
}

export default Navbar