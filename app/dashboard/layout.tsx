import React from 'react'
import SideNav from './(components)/SideNav';
import Header from './(components)/Header';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className='md:w-64 fixed hidden md:block'>
        <SideNav></SideNav>
      </div>

      <div className='md:ml-64'>
        <Header></Header>
        {children}
      </div>
    </div>
  )
}

export default layout