import React, { useEffect, useState } from 'react'

import { countDownDateAndTime } from 'countdown-date-time';     

const CountDown = () => {

    const conduct_date = '2027-08-12 12:00:00';
    const [count,setCount] = useState({})

    useEffect(()=>{
        setInterval(()=>{
            const countDown = countDownDateAndTime(conduct_date);
            setCount(countDown)
        },1000)
    },[])

  return (
    <div className='flex gap-7.5 justify-center pt-10'>
        <div className='w-31.25 h-30 rounded-[20px] p-5 bg-[#ffffff17] backdrop-blur-md text-white text-center'>
            <h2 className='text-[40px] font-bold'>{count.days}</h2>
            <h5 className='pb-2'>Days</h5>
        </div>
        <div className='w-31.25 h-30 rounded-[20px] p-5 bg-[#ffffff17] backdrop-blur-md text-white text-center'>
            <h2 className='text-[40px] font-bold'>{count.hours}</h2>
            <h5 className='pb-2'>Hours</h5>
        </div>
        <div className='w-31.25 h-30 rounded-[20px] p-5 bg-[#ffffff17] backdrop-blur-md text-white text-center'>
            <h2 className='text-[40px] font-bold'>{count.minutes}</h2>
            <h5 className='pb-2'>Minutes</h5>
        </div>
        <div className='w-31.25 h-30 rounded-[20px] p-5 bg-[#ffffff17] backdrop-blur-md text-white text-center'>
            <h2 className='text-[40px] font-bold'>{count.seconds}</h2>
            <h5 className='pb-2'>Seconds</h5>
        </div>
    </div>
  )
}

export default CountDown