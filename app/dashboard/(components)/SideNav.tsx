"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SideNav = () => {

  const path = usePathname();
  useEffect(() => {
    console.log(path)
  }, [])

  const List = [
    {
      name: "Home",
      icon: Home,
      path: './dashboard'
    },
    {
      name: "History",
      icon: FileClock,
      path: './dashboard/history'
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: './dashboard/billing'
    },
    {
      name: "Settings",
      icon: Settings,
      path: './dashboard/settings'
    }
  ]

  return (
    <div className='h-screen p-5 shadow-sm border'>
      <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt="logo" width={50} height={60} />
      </div>
      <div className='mt-12 flex justify-center flex-col'>
        {List.map((menu, index) => (
          <Link href={menu.path}>
            <div key={index} className={`flex gap-3 mb-3 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path == menu.path && 'bg-primary text-white'}`}>
              <menu.icon />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav