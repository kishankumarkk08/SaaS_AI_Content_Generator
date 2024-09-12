import React from 'react'

const HistoryHeader = () => {
  return (
    <div className='grid grid-cols-10 ml-8 place-content-center bg-slate-200 p-2 rounded-md w-[95%]'>
      <div className='col-span-2 text-lg font-semibold ml-8'>TEMPLATE</div>
      <div className='col-span-4 text-lg font-semibold ml-8'>AI RESPONSE</div>
      <div className='col-span-2 text-lg font-semibold ml-8'>DATE</div>
      <div className='col-span-2 text-lg font-semibold ml-8'></div>
    </div>
  )
}

export default HistoryHeader