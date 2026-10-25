import React from 'react'
import Container from './Container'
import Flex from './Flex'
import AboutImg from '../assets/aboutUs.png'
import Button from './Button'
import Icon1 from '../assets/iconone.png'
import Icon2 from '../assets/icontwo.png'
import Icon3 from '../assets/iconthree.png'
import ScrollVelocity from './ScrollVelocity/ScrollVelocity'

const AboutUs = () => {
    return (
        <>
            <ScrollVelocity
                texts={['Latest Updates * New Announcements * Workshop Alerts * Live Notices * Event Countdown *']}
                velocity={100}
                className="custom-scroll-text"
                numCopies={6}
                damping={50}
                stiffness={400}
            />
            <Container>
                <Flex>
                    <div className='w-169.5 pt-25'>
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className='pt-25'>
                        <Flex>
                            <div className='h-1.5 w-1.5 gap-4 bg-primary rounded-full my-auto'></div>
                            <p className='font-semibold text-[14px] text-black text-center'>About Us</p>
                        </Flex>
                        <h1 className='text-[48px] font-semibold leading[52px] pt-15'>Behind this event</h1>
                        <p className='text-[16px] w-165.75 leading-6.25 pt-4.5'>Discover the vision that drives this event—a commitment to bringing together innovators,
                            leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                            connections.</p>
                        <p className='text-[16px] w-165.75 leading-6.25 pt-4.5'>Our vision is to build a global community where collaboration fuels innovation we aim encourage
                            fresh thinking, spark inspiring dialogues, and create a space.</p>
                        <Flex className='w-165.75 shadow-[#444444]'>
                            <Flex className='gap-4'>
                                <img src={Icon1} alt="" />
                                <h1 className='text-[20px] font-bold'>Receive real-time event updates.</h1>
                            </Flex>
                            <Flex className='gap-4'>
                                <img src={Icon2} alt="" />
                                <h1 className='text-[20px] font-bold'>Receive real-time event updates.</h1>
                            </Flex>
                        </Flex>
                        <Flex className='pt-10 gap-4'>
                            <Button>Learn More About</Button>
                            <Flex className='gap-4'>
                                <img src={Icon3} alt="" />
                                <div className='w-47.5'>
                                    <h2 className='text-[20px] font-bold text-black'>Call now</h2>
                                    <p className='text-[18px]'>+00 123 456 789</p>
                                </div>
                            </Flex>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default AboutUs