import React from 'react'
import Container from './Container'
import {Link} from "react-router-dom"

function SignIn() {
  return (
    <Container>
    <div className="flex flex-col p-5 rounded-xl items-center bg-white">
        <h1 className="text-3xl font-bold mt-3">Sign In</h1>
        <p className="m-4 text-gray-600">Enter your credentials to sign in to your account</p>
        <div className="w-full">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
        <input id="email" type="text" placeholder="Email" className="block mb-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 w-full p-2.5"/>
        </div>
        <div className="w-full">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Enter Password</label>
        <input id="password" type="text" placeholder="Password" className="block mb-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 w-full p-2.5"/>
        </div>
        
        
        <button className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-5 w-full">Sign In</button>
        <p>Dont have an account? <Link to={"/signup"}> <span className="underline cursor-pointer">Sign up</span></Link></p>
        
        


      </div>
    </Container>
  )
}

export default SignIn