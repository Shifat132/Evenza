import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import EventOne from './EventOne'
import EventTwo from './EventTwo'
import EventThree from './EventThree'

const EventSchedule = () => {
    const [activeDay,setActiveDay] = useState("Day 01")

    const renderActive = ()=> {
        if(activeDay == "Day 01"){
            return <EventOne/>
        }
        if(activeDay == "Day 02"){
            return <EventTwo/>
        }
        if(activeDay == "Day 03"){
            return <EventThree/>
        }
    }

    return (
        <>
            <div className='bg-[url(./assets/EventSc.png)] bg-cover bg-center bg-no-repeat py-37.5'>
                <Container>
                    <div className='w-201 mx-87.5'>
                        <Flex className='gap-4 justify-center'>
                            <div className='h-1.5 w-1.5 gap-4 bg-primary rounded-full my-auto'></div>
                            <p className='font-semibold text-[14px] text-white text-center'>Our Event Schedule</p>
                        </Flex>
                        <h1 className='text-center font-semibold text-5xl text-white leading-13 pt-2.5 w-200'>Explore the complete schedule for our event</h1>
                        <div className='bg-white/10 items-center justify-center gap-2 rounded-full w-125 p-2.5 mx-auto mt-10'>
                            <Flex className='gap-4'>
                                <button onClick={()=> setActiveDay("Day 01")} className={`w-35 px-9 py-4.5 rounded-full text-[20px] font-semibold text-white ${activeDay == "Day 01" && "bg-white text-secondary!"}`}>
                                    Day 01
                                </button>
                                <button onClick={()=> setActiveDay("Day 02")} className={`w-35 px-9 py-4.5 rounded-full text-[20px] font-semibold text-white ${activeDay == "Day 02" && "bg-white text-secondary!"}`}>
                                    Day 02
                                </button>
                                <button onClick={()=> setActiveDay("Day 03")} className={`w-35 px-9 py-4.5 rounded-full text-[20px] font-semibold text-white ${activeDay == "Day 03" && "bg-white text-secondary!"}`}>
                                    Day 03
                                </button>
                            </Flex>
                        </div>
                    </div>
                            
                            <div>
                                {renderActive()}
                            </div>
                </Container>
            </div>
        </>
    )
}

export default EventSchedule