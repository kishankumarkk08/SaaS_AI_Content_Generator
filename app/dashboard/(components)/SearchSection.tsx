import { Search, SearchIcon } from 'lucide-react'
import React from 'react'

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via placeholder-purple-700 to to-blue-700 flex justify-center items-center text-white flex-col'>
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
          <Search className='text-gray-400'></Search>
          <input type="text" placeholder='search' className='outline-none bg-transparent text-black w-full' onChange={(e) => onSearchInput(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default SearchSection