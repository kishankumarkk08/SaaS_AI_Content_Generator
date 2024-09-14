"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, LayoutDashboardIcon, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Usage from './Usage'

const SideNav = () => {
  const path = usePathname();
  useEffect(() => {
    console.log(path)
  }, [path])

  const List = [
    {
      name: "Home",
      icon: Home,
      path: '/'
    },
    {
      name: "Dashboard",
      icon: LayoutDashboardIcon,
      path: '/dashboard'
    },
    {
      name: "History",
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: "Pricing",
      icon: WalletCards,
      path: '/dashboard/billing'
    },
    {
      name: "Settings",
      icon: Settings,
      path: '/dashboard/settings'
    }
  ]

  return (
    <div className='h-screen bg-gray-100 p-5 shadow-md border-r border-gray-300'>
      <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt="logo" width={50} height={60} />
      </div>
      <div className='mt-12 flex flex-col space-y-3'>
        {List.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-300 ${path === menu.path ? 'bg-indigo-600 text-white' : ' text-gray-700 hover:bg-indigo-500 hover:text-white'}`}>
              <menu.icon className="w-5 h-5" />
              <h2 className='text-lg font-medium'>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full px-5'>
        <Usage />
      </div>
    </div>
  )
}

export default SideNav