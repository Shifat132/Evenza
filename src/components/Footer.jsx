import React from 'react'
import Container from './Container'
import Flex from './Flex'
import FooterLogo from '../assets/logo.svg.png'

const Footer = () => {
    return (
        <>
            <div className='bg-[url(./assets/Footer.png)] bg-cover bg-center bg-no-repeat py-37.5'>
                <Container>
                    <Flex className='mt-25'>
                        <h2 className='text-white w-170 font-semibold text-5xl'>Join our newsletter for event
                            important announcement</h2>
                        <div className='ml-87.75'>
                            <p className='text-white'>Stay informed with instant updates delivered straight to
                                your inbox.</p>
                            <input type="email" name="" id="" className='bg-white/10 w-105 rounded-full mt-5 py-5' />
                        </div>
                    </Flex>
                    <div className='mt-22.5 w-350 h-px bg-gray-500'></div>
                    <Flex className='mt-22'>
                        <div className='w-90.25'>
                            <img src={FooterLogo} alt="" />
                            <p className='text-white mt-10'>Experience a world-class conference designed
                                to inspire innovation, empower professionals,
                                and connect leaders from around the globe.</p>
                        </div>
                        <ul className='text-white ml-150'>
                            <li className='text-[20px] font-semibold'>Quick Links</li>
                            <li className='mt-2.5'>Home</li>
                            <li className='mt-2.5'>About Us</li>
                            <li className='mt-2.5'>Speakers</li>
                            <li className='mt-2.5'>Events</li>
                            <li className='mt-2.5'>Contact Us</li>
                        </ul>
                        <ul className='text-white ml-10'>
                            <li className='text-[20px] font-semibold'>Schedules</li>
                            <li className='mt-2.5'>Event Management</li>
                            <li className='mt-2.5'>Live Streaming</li>
                            <li className='mt-2.5'>Virtual Event Setup</li>
                            <li className='mt-2.5'>Keynote Sessions</li>
                            <li className='mt-2.5'>Networking Programs</li>
                        </ul>
                        <ul className='text-white ml-10 '>
                            <li className='text-[20px] font-semibold'>Get In Touch</li>
                            <li className='mt-2.5'>+00 123 456 789</li>
                            <li className='mt-2.5'>support@domainname.com</li>
                            <li className='mt-2.5'>45/2 Central Business Innovation
                                Near International Trade Tower</li>

                        </ul>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Footer