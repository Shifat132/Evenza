import React from 'react'
import Logo from "../assets/Link.png"
import Container from './Container'
import Flex from './Flex'
import Button from './Button'

const NavBar = () => {
    return (
        <>
            <nav className='absolute top-0 left-0 w-full backdrop-blur-md bg-[ffffff11] text-white py-6.25'>
                <Container>
                    <Flex className='justify-between items-center'>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <ul className='flex gap-5 items-center'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Schedule</li>
                            <li>Blog</li>
                            <li>Pages</li>
                            <li>Contact Us</li>
                        </ul>
                        <Button>Join the Conference</Button>
                    </Flex>
                </Container>
            </nav>
        </>
    )
}

export default NavBar