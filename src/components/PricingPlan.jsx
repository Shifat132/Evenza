import React from 'react'
import Flex from './Flex'
import Container from './Container'
import pricing1 from '../assets/pricing.png'
import Button from './Button'

const PricingPlan = () => {
  return (
    <>
    <div className='bg-white py-25'>
      <Container>
        <div className='w-201 mx-87.5 text-black'>
                        <Flex className='gap-4 justify-center'>
                            <div className='h-1.5 w-1.5 gap-4 bg-primary rounded-full my-auto'></div>
                            <p className='font-semibold text-[14px]  text-center'>Pricing Plan</p>
                        </Flex>
                        <h1 className='text-center font-semibold text-5xl  leading-13 pt-2.5 w-200'>Discover our flexible pricing plans for attendees</h1>
                    </div>
                    <Flex className='gap-10'>
                      <div className='w-117.75 bg-[#F6F6F7] rounded-[20px] mt-20 transition-transform duration-300 ease-in-out hover:scale-110'>
                        <div className='flex gap-2 mt-5 ml-10'>
                          <div className='bg-primary size-12.5 rounded-[10px]'>
                          <img src={pricing1} alt="" className='mx-auto mt-3' />
                          </div>
                          <div>
                            <h4 className='text-[20px]'>Basic Package</h4>
                            <p className='text-[16px] text-[#737681]'>Perfect for first-time attend</p>
                          </div>
                        </div>
                        <div className='ml-10 flex'>
                          <h2 className='mt-9 font-bold text-5xl'>$49</h2>
                          <h3 className='mt-16 text-[#737681]'>/one time</h3>
                        </div>
                        <h2 className='mt-17.5 ml-10 font-bold text-[20px]'>What's Included:</h2>
                        <h3 className='mt-3 ml-10 text-[16px] text-[#737681]'>It could relate to a subscription</h3>
                        <ul className='w-92.75 mt-20.75 text-[#737681] ml-10'>
                          <li className='text-[16px]'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Entry to all standard sessions</li>
                          <li className='text-[16px] mt-4'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Reserved seating in select session</li>
                          <li className='text-[16px] mt-4'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Meet & greet with speakers</li>
                          <li className='text-[16px] mt-4'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Premium networking lounge</li>
                        </ul>
                        <Button className='px-28 py-4 mt-10 rounded-full ml-10'>Get Standard Pass</Button>
                      </div>
                      <div className='w-117.75 bg-[#F6F6F7] rounded-[20px] mt-20 transition-transform duration-300 ease-in-out hover:scale-110'>
                        <div className='flex gap-2 mt-5 ml-10'>
                          <div className='bg-primary size-12.5 rounded-[10px]'>
                          <img src={pricing1} alt="" className='mx-auto mt-3' />
                          </div>
                          <div>
                            <h4 className='text-[20px]'>Basic Package</h4>
                            <p className='text-[16px] text-[#737681]'>Perfect for first-time attend</p>
                          </div>
                        </div>
                        <div className='ml-10 flex'>
                          <h2 className='mt-9 font-bold text-5xl'>$49</h2>
                          <h3 className='mt-16 text-[#737681]'>/one time</h3>
                        </div>
                        <h2 className='mt-17.5 ml-10 font-bold text-[20px]'>What's Included:</h2>
                        <h3 className='mt-3 ml-10 text-[16px] text-[#737681]'>It could relate to a subscription</h3>
                        <ul className='w-92.75 mt-20.75 text-[#737681] ml-10'>
                          <li className='text-[16px]'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Entry to all standard sessions</li>
                          <li className='text-[16px] mt-4'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Reserved seating in select session</li>
                          <li className='text-[16px] mt-4'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Meet & greet with speakers</li>
                          <li className='text-[16px] mt-4'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Premium networking lounge</li>
                        </ul>
                        <Button className='px-28 py-4 mt-10 rounded-full ml-10'>Get Standard Pass</Button>
                      </div>
                      <div className='w-117.75 bg-[#F6F6F7] rounded-[20px] mt-20 transition-transform duration-300 ease-in-out hover:scale-110'>
                        <div className='flex gap-2 mt-5 ml-10'>
                          <div className='bg-primary size-12.5 rounded-[10px]'>
                          <img src={pricing1} alt="" className='mx-auto mt-3' />
                          </div>
                          <div>
                            <h4 className='text-[20px]'>Basic Package</h4>
                            <p className='text-[16px] text-[#737681]'>Perfect for first-time attend</p>
                          </div>
                        </div>
                        <div className='ml-10 flex'>
                          <h2 className='mt-9 font-bold text-5xl'>$49</h2>
                          <h3 className='mt-16 text-[#737681]'>/one time</h3>
                        </div>
                        <h2 className='mt-17.5 ml-10 font-bold text-[20px]'>What's Included:</h2>
                        <h3 className='mt-3 ml-10 text-[16px] text-[#737681]'>It could relate to a subscription</h3>
                        <ul className='w-92.75 mt-20.75 text-[#737681] ml-10'>
                          <li className='text-[16px]'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Entry to all standard sessions</li>
                          <li className='text-[16px] mt-4'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Reserved seating in select session</li>
                          <li className='text-[16px] mt-4'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Meet & greet with speakers</li>
                          <li className='text-[16px] mt-4'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Premium networking lounge</li>
                        </ul>
                        <Button className='px-28 py-4 mt-10 rounded-full ml-10'>Get Standard Pass</Button>
                      </div>
                    </Flex>
      </Container>
    </div>
    </>
  )
}

export default PricingPlan