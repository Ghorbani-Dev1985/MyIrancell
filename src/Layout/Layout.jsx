import React from 'react'
import { Outlet } from 'react-router-dom'
import RightSide from '../Components/RightSide/RightSide'
import LeftSide from '../Components/LeftSide/LeftSide'


function Layout() {
  return (
    <>
   
    <main className='grid grid-cols-12 gap-5 min-h-screen w-full max-w-[1920px]'>
      <RightSide />
     <section className='pt-10 lg:pt-25 grid col-span-8 bg-white'>
       <div className='container'>
        <Outlet />
       </div>
     </section>
     <LeftSide />
    </main>
   
    </>
  )
}

export default Layout
