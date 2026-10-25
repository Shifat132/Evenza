import React from 'react'
import Container from './Container'
import Flex from './Flex'
import speakerone from '../assets/speakeruno.png'
import speakertwo from '../assets/speakerdos.png'
import speakerthree from '../assets/speakertres.png'

const OurSpeakers = () => {
    return (
        <>
            <div className='bg-white py-25'>
                <Container>
                    <div className='w-201 mx-87.5 text-black'>
                        <Flex className='gap-4 justify-center'>
                            <div className='h-1.5 w-1.5 gap-4 bg-primary rounded-full my-auto'></div>
                            <p className='font-semibold text-[14px]  text-center'>Our Speakers</p>
                        </Flex>
                        <h1 className='text-center font-semibold text-5xl  leading-13 pt-2.5 w-200'>Introducing the expert speakers</h1>
                    </div>
                    <Flex className='pt-22.5 gap-10'>
                        <div>
                            <img src={speakerone} alt="" className='w-112.75' />
                            <h3 className='text-[20px] font-semibold pt-7'>Sophia Rodrigues</h3>
                            <p className='text-[16px] pt-3'>Global Marketing Director</p>
                        </div>
                        <div>
                            <img src={speakertwo} alt="" className='w-112.75' />
                            <h3 className='text-[20px] font-semibold pt-7'>Jacob Jones</h3>
                            <p className='text-[16px] pt-3'>Lead AI Research Scientist</p>
                        </div>
                        <div>
                            <img src={speakerthree} alt="" className='w-112.75' />
                            <h3 className='text-[20px] font-semibold pt-7'>Arlene McCoy</h3>
                            <p className='text-[16px] pt-3'>Innovation Strategy Expert</p>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default OurSpeakers