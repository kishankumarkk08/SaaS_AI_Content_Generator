"use client"
import React, { useState } from 'react'
import SideNav from './(components)/SideNav';
import Header from './(components)/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext'
import { UserSubsContext } from '../(context)/UserSubsContext';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [totalUsage, setTotalUsage] = useState<number>(0)
  const [userSubscription, setUserSubscription] = useState<boolean>(false)
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubsContext.Provider value={{ userSubscription, setUserSubscription }}>
        <div>
          <div className='md:w-64 fixed hidden md:block'>
            <SideNav></SideNav>
          </div>

          <div className='md:ml-64'>
            <Header></Header>
            {children}
          </div>
        </div>
      </UserSubsContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default layout