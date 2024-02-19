import React from 'react'
import { Outlet } from 'react-router-dom'
import RightSide from '../Components/RightSide/RightSide'
import LeftSide from '../Components/LeftSide/LeftSide'
import TopBanner from '../assets/Images/TopBanner/topBanner.gif'

function Layout() {
  return (
    <>
   
    <main className='grid grid-cols-12 gap-5 h-full min-h-screen w-full max-w-[1920px]'>
      <RightSide />
     <section className='grid col-span-8 pt-5'>
       <div className='container'>
        <div className='flex-center'>
        <img src={TopBanner} alt='topBanner' className='rounded-lg shadow-ring w-full h-44' />
        </div>
        <Outlet />
       </div>
     </section>
     <LeftSide />
    </main>
   
    </>
  )
}

export default Layout
