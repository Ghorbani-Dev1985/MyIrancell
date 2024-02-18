import React from 'react'
import { Outlet } from 'react-router-dom'
import RightSide from '../Components/RightSide/RightSide'
import LeftSide from '../Components/LeftSide/LeftSide'
import TopBanner from '../assets/Images/TopBanner/topBanner.gif'

function Layout() {
  return (
    <>
   
    <main className='grid grid-cols-12 gap-5 min-h-screen w-full max-w-[1920px]'>
      <RightSide />
     <section className='grid col-span-8 bg-white pt-5'>
       <div className='container'>
        <img src={TopBanner} alt='topBanner' className='rounded-lg shadow-ring' />
        <Outlet />
       </div>
     </section>
     <LeftSide />
    </main>
   
    </>
  )
}

export default Layout
