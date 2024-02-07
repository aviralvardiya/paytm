import React from 'react'
import InitialsIcon from './InitialsIcon'

function UserComp({user}) {
  return (
    <div className='flex mx-5 justify-between'>
        <div className='flex gap-3 items-center'>
        <InitialsIcon user={user}/>
        <h2>{user.firstName} {user.lastName}</h2>
        </div>
        <button className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 w-32">Send money</button>
    </div>
  )
}

export default UserComp