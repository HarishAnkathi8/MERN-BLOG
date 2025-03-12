import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link,useLocation } from 'react-router-dom'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import {FaMoon} from "react-icons/fa"
const Header = () => {
    const path = useLocation().pathname
  return (
    <Navbar className='border-b-2'>
        <Link className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Varma's</span>Blog
        </Link>
        <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
        />
        <Button className='lg:hidden h-10 w-12' color='gray' pill>
            <AiOutlineSearch/>
        </Button>
        <div className='flex  md:order-2'>
        <Button className='lg:hidden h-10 w-12' color='gray' pill>
            <FaMoon/>
        </Button> 
        <Link to="/signin" >
        <Button color='gray' gradientDuoTone='purpleToBlue' outline>
            sign In
        </Button>  
        </Link>
        <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path==="/"} as={"div"}>
                <Link to="/">Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/about"} as={"div"}>
                <Link to="/About">About</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/projects"} as={"div"}>
                <Link to="/projects">Projects</Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
