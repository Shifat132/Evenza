import React from 'react'
import Container from './Container'
import Flex from './Flex'
import TestBg from '../assets/testBg.png'
import Edwards from '../assets/edwards.png'
import Watson from '../assets/watson.png'
import Vector from '../assets/Vector.png'
import Vector3 from '../assets/Vector3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestiMonial = () => {
    return (
        <>
            <div className='bg-[url(./assets/testBg.png)] bg-center bg-no-repeat bg-cover py-37.5'>
                <Container>
                    <div className='w-201 mx-87.5'>
                        <Flex className='gap-4 justify-center'>
                            <div className='h-1.5 w-1.5 gap-4 bg-white rounded-full my-auto'></div>
                            <p className='font-semibold text-[14px] text-white text-center'>Testimonials</p>
                        </Flex>
                        <h1 className='text-center font-semibold text-5xl text-white leading-13 pt-2.5 w-200'>What our customers say about their
                            experience</h1>
                    </div>
                    <Flex className='mt-20'>
                        <div className='w-86.5 h-105 bg-primary rounded-[20px]'>
                            <div className='ml-10'>
                                <p className='mt-4.25 text-[16px] text-white'>Over 15,000+ Attendees
                                    Connected Worldwide</p>
                                <h4 className='mt-24.5 text-[20px] text-white font-bold'>Client Experience Speak
                                    For Themselves</h4>
                                <button className='w-45 mt-10 bg-white text-primary px-6 py-3.25 rounded-full'>View All Reviews</button>
                            </div>
                        </div>
                        <div className='w-133.25 bg-white/10 ml-7.5 rounded-[20px]'>
                            <Flex className='gap-2 mx-auto w-102.5 items-center mt-10'>
                                <i className="fa-solid fa-star text-center" style={{ color: "rgb(115, 75, 223)" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                            </Flex>
                            <h2 className='mt-11.25 text-white font-semibold w-110 ml-10'>"Truly outstanding service! The team exceeded our
                                expectations with their professionalism, creativity,
                                and quick turnaround time. Highly recommended for
                                anyone seeking quality and reliability."</h2>
                            <div className='bg-gray-500 w-113.25 h-px ml-10 mt-17.5'></div>
                            <Flex className='ml-10 mt-12.5 text-white'>
                                <Flex className='gap-2.5'>
                                    <img src={Edwards} alt="" className='size-12.75 rounded-full ' />
                                    <div>
                                        <h3 className='font-bold text-[20px]'>Ralph Edwards</h3>
                                        <p className='mt-0.75'>Global Marketing Director</p>
                                    </div>
                                </Flex>
                                <i class="fa-solid fa-quote-right ml-40 my-auto text-[20px]"   style={{ color: "rgb(115, 75, 223)" }}></i>
                            </Flex>
                        </div>
                        <div className='w-133.25 bg-white/10 ml-7.5 rounded-[20px]'>
                            <Flex className='gap-2 mx-auto w-102.5 items-center mt-10'>
                                <i className="fa-solid fa-star text-center" style={{ color: "rgb(115, 75, 223)" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                            </Flex>
                            <h2 className='mt-11.25 text-white font-semibold w-110 ml-10'>"Truly outstanding service! The team exceeded our
                                expectations with their professionalism, creativity,
                                and quick turnaround time. Highly recommended for
                                anyone seeking quality and reliability."</h2>
                            <div className='bg-gray-500 w-113.25 h-px ml-10 mt-17.5'></div>
                            <Flex className='ml-10 mt-12.5 text-white'>
                                <Flex className='gap-2.5'>
                                    <img src={Watson} alt="" className='size-12.75 rounded-full ' />
                                    <div>
                                        <h3 className='font-bold text-[20px]'>Kristin Watson</h3>
                                        <p className='mt-0.75'>Global Marketing Director</p>
                                    </div>
                                </Flex>
                                <i class="fa-solid fa-quote-right ml-40 my-auto text-[20px]"   style={{ color: "rgb(115, 75, 223)" }}></i>
                            </Flex>
                        </div>
                    </Flex>
                    <Flex>
                        <div className='bg-gray-500 w-121.25 h-px  mt-40'></div>
                        <p className='mx-9 text-[20px] font-semibold mt-36 text-white'>Supported by Brands That Inspire Innovation</p>
                        <div className='bg-gray-500 w-121.25 h-px  mt-40'></div>
                    </Flex>
                    <Flex className='mt-17.5 gap-23 ml-27.5'>
                        <Flex className='gap-2'>
                            <img src={Vector} alt="" className='size-12.75 rounded-full ' />
                            <h3  className='font-bold text-[20px] text-white flex justify-center items-center'>Logoipsum</h3>
                        </Flex>
                        <Flex className='gap-2'>
                            <img src={Vector} alt="" className='size-12.75 rounded-full ' />
                            <h3  className='font-bold text-[20px] text-white flex justify-center items-center'>Logoipsum</h3>
                        </Flex>
                        <Flex className='gap-2'>
                            <img src={Vector3} alt="" className='size-12.75 rounded-full ' />
                            <h3  className='font-bold text-[20px] text-white flex justify-center items-center'>Logoipsum</h3>
                        </Flex>
                        <Flex className='gap-2'>
                            <img src={Vector} alt="" className='size-12.75 rounded-full ' />
                            <h3  className='font-bold text-[20px] text-white flex justify-center items-center'>Logoipsum</h3>
                        </Flex>
                        <Flex className='gap-2'>
                            <img src={Vector} alt="" className='size-12.75 rounded-full ' />
                            <h3  className='font-bold text-[20px] text-white flex justify-center items-center'>Logoipsum</h3>
                        </Flex>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default TestiMonial