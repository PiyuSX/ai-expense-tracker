import React from 'react'
import Guest from '@/components/Guest'
import { currentUser } from '@clerk/nextjs/server';



const Home = async () => {
  const User = await currentUser();

  if (!User) {
    return <Guest />
  }
  return (
    <div>
      <h1>Welcome back!</h1>
    </div>
  )
}

export default Home