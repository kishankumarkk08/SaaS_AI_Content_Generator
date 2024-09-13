import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-3 shadow-sm border-b-2 flex justify-between'>
      <div className='flex gap-4 items-center p-2 border rounded-2xl max-w-4xl'>
        <Search></Search>
        <input type="text" placeholder='Dummy Search' className='w-full outline-none rounded-lg' />
      </div>
      <div>
        <h2 className='bg-primary p-2 rounded-full text-sm text-white px-6'>Join membership</h2>
      </div>
    </div>
  )
}

export default Header