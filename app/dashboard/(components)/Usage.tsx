"use client"
import { Button } from '@/components/ui/button'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { AIOutput, UserSubscription } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UserSubsContext } from '@/app/(context)/UserSubsContext'
import { UpdateCreditsContext } from '@/app/(context)/UpdateCreditsContext'

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
  const { userSubscription, setUserSubscription } = useContext(UserSubsContext)
  const { credits, setCredits } = useContext(UpdateCreditsContext)


  useEffect(() => {
    user && GetData();
    user && isSubscribed();
  }, [user])

  useEffect(() => {
    user && GetData()
  }, [credits && user])

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

  const isSubscribed = async () => {
    const result = await db.select().from(UserSubscription).where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress))

    if (result) {
      setUserSubscription(true)
    }
  }
  return (
    <div>
      <div className='bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-3 rounded-lg shadow-lg w-full'>
        <h2 className='text-lg font-bold'>Credits</h2>

        <div className='h-2 bg-gray-100 w-full rounded-full mt-2'>
          <div
            className='h-2 bg-yellow-400 rounded-full shadow-inner transition-all duration-500'
            style={{ width: userSubscription ? '0%' : `${(totalUsage / 10000) * 100}%` }}>
          </div>
        </div>

        <h2 className='text-xs mt-2 font-medium'>
          {totalUsage} / {userSubscription ? 'Unlimited' : '10000'} Credits used
        </h2>
      </div>
      <div>
        {userSubscription ? <div className="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4 rounded-lg shadow-md mt-4">
          <p className="font-semibold">Don't worry!</p>
          <p className="text-sm mt-1">The width of the usage bar will never increase as you are our <span className="font-bold">"prime customer"</span>.</p>
        </div> : <div>
          <Button className='w-[90%] my-3 mr-4 ml-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-500 transition-all duration-300'>
            Upgrade
          </Button>
        </div>}
      </div>
    </div>
  )
}

export default Usage