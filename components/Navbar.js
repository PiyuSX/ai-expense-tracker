import React from 'react'
import { checkUser } from '@/lib/checkUser'

const Navbar = async () => {
    const user = await checkUser();
  return (
    <div>
        
        <h1>NavBar</h1>
        <p>{user ? user.name : "Guest"}</p>
    </div>
  )
}

export default Navbar