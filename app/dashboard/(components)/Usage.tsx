import { Button } from '@/components/ui/button'
import React from 'react'

const Usage = () => {
  return (
    <div>
      <div className='bg-primary text-white p-3 rounded-lg mr-4 ml-2'>
        <h2>Credits</h2>
        <div className='h-2 bg-[#ffffff] w-full rounded-full mt-3'>
          <div className='h-2 bg-slate-400 rounded-full' style={{ width: '35%' }}></div>
        </div>
        <h2 className='text-sm mt-2'>3500 / 10000 Credits used</h2>
      </div>
      <div>
        <Button className='w-[90%] my-3 mr-4 ml-2 bg-primary text-white'>Upgrade</Button>
      </div>
    </div>
  )
}

export default Usage