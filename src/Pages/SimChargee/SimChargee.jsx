import { FormControlLabel, Stack, Typography} from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';


const SimChargee = () => {
  const [isPermanent , setIsPermanent] = useState(false)
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 32,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#059669' : '#10b981',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 18 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  return (
    <div className='flex-center bg-white shadow-ring rounded-xl my-16'>
       <div className='w-full flex-between gap-5 p-6'>
          <div className='flex flex-col items-center gap-2 flex-1'>
                    <h2 className='font-DanaBold'>خرید آنلاین شارژ ایرانسل</h2>
                    <span className='text-base text-gray-500'>نوع سیم‌کارت</span>
                    <div className='inline-block mx-auto border border-[#e6e6e8] rounded-3xl'>
                          <button onClick={() => setIsPermanent((prev) => !prev)} className={`${!isPermanent && 'bg-primary'} w-28 rounded-3xl font-bold text-sm py-2 transition-colors`}>
                            اعتباری
                          </button>
                          <button onClick={() => setIsPermanent((prev) => !prev)} className={`${isPermanent && 'bg-primary'} w-28 rounded-3xl font-bold text-sm py-2 transition-colors`}>
                            اعتباری
                          </button>
                    </div>
                    <div className='flex-center gap-2 max-w-56 mt-6 mx-auto mb-11'>
                    <Stack direction="row" spacing={1} alignItems="center">
                       <AntSwitch disabled={isPermanent && true} inputProps={{ 'aria-label': 'ant design' }} />
                    </Stack>
                  <span className={`${isPermanent ? "opacity-30" : "opacity-100"} ml-2 text-gray-600 opacity-30`}>شارژ شگفت انگیز</span>
                    </div>
                    <div className="w-full relative z-0">
    <input type="text" id="PhoneNumber" className="block h-16 w-full text-sm text-gray-900 bg-gray-100 rounded-full border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-5 focus:border-primary peer" placeholder=" " />
    <label for="PhoneNumber" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 right-4 z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1 rtl:peer-focus:left-auto">شماره تلفن همراه</label>
                 </div>
          <p className='text-gray-500 self-start'>مبلغ شارژ</p>
          </div>
          <div className='flex flex-1'>
fffffff
          </div>
       </div>
     
    </div>
  )
}

export default SimChargee
