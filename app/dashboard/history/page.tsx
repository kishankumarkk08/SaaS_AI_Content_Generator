import React from 'react'
import HistoryHeader from './_components/HistoryHeader'

const page = () => {
  return (
    <div>
      <div className='p-8 flex flex-col gap-1'>
        <h1 className='font-bold text-3xl'>History</h1>
        <p className='text-slate-800'>Get your previously generated content</p>
      </div>
      <HistoryHeader />
    </div>
  )
}

export default page