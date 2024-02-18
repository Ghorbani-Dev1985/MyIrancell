import React from 'react'
import Logo from '../../assets/Images/Logo/logo.svg'
import { Divider } from '@mui/material'


function RightSide() {
  return (
    <div className='gird col-span-2 bg-white p-2'>
        <div className='flex-center gap-2'>
       <img src={Logo} alt='Logo' className='size-20'/>
       <span className='font-MorabbaBold text-2xl'>ایرانسل من</span>
        </div>
        <Divider />
    </div>
  )
}

export default RightSide
