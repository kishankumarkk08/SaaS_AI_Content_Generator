import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const settings = () => {
  return (
    <div className='flex items-center justify-center bg-gray-100 h-screen'>
      <UserProfile />
    </div>
  )
}

export default settings