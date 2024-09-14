"use client"
import { useState, useContext } from 'react'
import { UserButton } from '@clerk/nextjs'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SideNav from './SideNav' // Adjust the import path if necessary
import Link from 'next/link'
import { UserSubsContext } from '@/app/(context)/UserSubsContext'

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  const { userSubscription, setUserSubscription } = useContext(UserSubsContext);


  const toggleSideNav = () => {
    setIsSideNavOpen(prev => !prev)
  }

  return (
    <>
      <div className='p-3 shadow-sm border-b-2 flex justify-between sm:justify-end bg-gray-100'>
        <div className='flex gap-4 items-center p-2 rounded-2xl max-w-4xl sm:hidden'>
          <Button className='rounded-xl' size="icon" onClick={toggleSideNav}>
            <ChevronRight className={`h-4 w-4 ${isSideNavOpen ? 'rotate-90' : ''}`} />
          </Button>
        </div>

        <div className='flex gap-8 items-center'>
          <Link href="/dashboard/billing">
            <h2 className='p-3 bg-[#ff6f61] rounded-full text-sm text-white font-bold px-6'>{userSubscription ? 'Premium' : 'Join Membership'}</h2>
          </Link>
          <div className='mr-4 flex items-center'>
            <UserButton />
          </div>
        </div>
      </div>

      {isSideNavOpen && <SideNav />}
    </>
  )
}

export default Header