"use client"
import { Button } from '@/components/ui/button'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'

interface HISTORY {
  id: Number,
  formData: string,
  aiResponse: string,
  templateSlug: string,
  createdBy: string,
  createdAt: string
}

const Usage = () => {
  const { user } = useUser()
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)


  useEffect(() => {
    user && GetData();
  }, [user])

  const GetData = async () => {
    // @ts-ignore
    const result: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))

    GetTotalUsage(result)
  }

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach(element => {
      total = total + Number(element.aiResponse.length);
    });
    setTotalUsage(total)
    console.log(total);
  }
  return (
    <div>
      <div className='bg-primary text-white p-3 rounded-lg mr-4 ml-2'>
        <h2>Credits</h2>
        <div className='h-2 bg-[#ffffff] w-full rounded-full mt-3'>
          <div className='h-2 bg-slate-500 rounded-full' style={{ width: (totalUsage / 10000) * 100 + "%" }}></div>
        </div>
        <h2 className='text-sm mt-2'>{totalUsage} / 10,000 Credits used</h2>
      </div>
      <div>
        <Button className='w-[90%] my-3 mr-4 ml-2 bg-primary text-white'>Upgrade</Button>
      </div>
    </div>
  )
}

export default Usage