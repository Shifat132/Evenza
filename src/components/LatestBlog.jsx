import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Link1 from '../assets/link1.png'
import Link2 from '../assets/link2.png'
import Link3 from '../assets/link3.png'

const LatestBlog = () => {
    return (
        <>
            <div className='bg-white py-37.5'>
                <Container>
                    <div className='w-201 mx-87.5'>
                        <Flex className='gap-4 justify-center'>
                            <div className='h-1.5 w-1.5 gap-4 bg-primary rounded-full my-auto'></div>
                            <p className='font-semibold text-[14px] text-black text-center'>Latest Blog</p>
                        </Flex>
                        <h1 className='text-center font-semibold text-5xl text-black leading-13 pt-2.5 w-200'>Explore our latest insights stories
                            and updates
                        </h1>
                    </div>
                    <Flex className='mt-22.5'>
                        <div className='w-180.25'>
                            <img src={Link1} alt="" className='w-180.25' />
                            <p className='text-[#737681] mt-5'>Esther Howard</p>
                            <h3 className='text-[20px] font-semibold mt-5'>Mastering Public Speaking: Expert Tips for Confident
                                Presentations</h3>
                            <p className='mt-5 text-[#737681]'>Improve your communication skills with proven techniques used by world-class
                                speakers to captivate and inspire audiences.</p>
                            <p className='text-primary mt-17.25'>Read More<i class="fa-solid fa-arrow-right" style={{ color: "rgb(115, 75, 223)" }}></i></p>
                        </div>
                        <div className='ml-10'>
                            <Flex className='w-180.25'>
                                <img src={Link2} alt="" className='w-86' />
                                <div className='ml-10'>
                                    <p className='text-[#737681] mt-5'>Esther Howard</p>
                                    <h3 className='text-[20px] font-semibold mt-5 w-[256px]'>Simple Self-Defense Skills
                                        Everyone Should Learn for
                                        Safety</h3>
                                    <p className='text-primary mt-17.25'>Read More<i class="fa-solid fa-arrow-right" style={{ color: "rgb(115, 75, 223)" }}></i></p>
                                </div>
                            </Flex>
                            <Flex className='w-180.25 mt-10'>
                                <img src={Link2} alt="" className='w-86' />
                                <div className='ml-10'>
                                    <p className='text-[#737681] mt-5'>Esther Howard</p>
                                    <h3 className='text-[20px] font-semibold mt-5 w-[256px]'>Simple Self-Defense Skills
                                        Everyone Should Learn for
                                        Safety</h3>
                                    <p className='text-primary mt-17.25'>Read More<i class="fa-solid fa-arrow-right" style={{ color: "rgb(115, 75, 223)" }}></i></p>
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default LatestBlog