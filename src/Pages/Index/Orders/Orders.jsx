import React from 'react'
import useFetch from '../../../Hooks/useFetch'

const Orders = () => {
    const {datas : userBuy} = useFetch('userBuy')
    console.log(userBuy)
  return (
    <div className='my-8 shadow-round p-2 rounded-lg'>
    <h2 className='font-MorabbaBold my-5'>بسته های من</h2>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-primary text-black">
            <tr>
            <th scope="col" className="px-6 py-3">
                    تاریخ خرید 
                </th>
                <th scope="col" className="px-6 py-3">
                    تاریخ انقضا بسته
                </th>
                <th scope="col" className="px-6 py-3">
                    نام بسته
                </th>
                <th scope="col" className="px-6 py-3">
                    تخفیف
                </th>
                <th scope="col" className="px-6 py-3">
                    قیمت
                </th>
            
            </tr>
        </thead>
        <tbody>
            {
                 userBuy.map(({ID,buyDate , maxDate, off , price , title}) => {
               return(
            <tr className="bg-white text-black border-b hover:bg-gray-50 text-center">
            <td scope="row" className="px-6 py-4">
                  {buyDate}
                </td>
                <td scope="row" className="px-6 py-4">
                   ۱۵ فروردین ۱۴۰۳
                </td>
                <td className="px-6 py-4">
                    بسته اینترنت سه ماهه
                </td>
                <td className="px-6 py-4">
                    ۲۰٪
                </td>
                <td className="px-6 py-4">
                    100,000
                </td>
                
            </tr>
               )
                })
            }
            <tr className="bg-white text-black border-b hover:bg-gray-50 text-center">
            <td scope="row" className="px-6 py-4">
                   ۱۵ فروردین ۱۴۰۳
                </td>
                <td scope="row" className="px-6 py-4">
                   ۱۵ فروردین ۱۴۰۳
                </td>
                <td className="px-6 py-4">
                    بسته اینترنت سه ماهه
                </td>
                <td className="px-6 py-4">
                    ۲۰٪
                </td>
                <td className="px-6 py-4">
                    100,000
                </td>
               
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Orders
