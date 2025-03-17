import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { toggleTheme } from "../redux/theme/themeSlice.js";
const Header = () => {
    const path = useLocation().pathname
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.user)
    const { theme } = useSelector(state => state.theme)
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
                <AiOutlineSearch />
            </Button>
            <div className='flex  md:order-2'>
                <Button className=' h-10 w-12 outline' color='gray' pill onClick={() => dispatch(toggleTheme())}>
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </Button>
                {currentUser ? (
                    <Dropdown arrowIcon={false} inline label={<Avatar alt="User" img={currentUser.profilePicture} rounded />}>
                        <Dropdown.Header>
                            <span className='block text-sm'>@{currentUser.username}</span>
                            <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                        </Dropdown.Header>
                        <Link to={"/dashboard?tab=profile"}>
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider />
                        <Dropdown.Item >Signout</Dropdown.Item>
                    </Dropdown>
                ) : (
                    <Link to="/signin" >
                        <Button color='gray' gradientDuoTone='purpleToBlue' outline>
                            sign In
                        </Button>
                    </Link>
                )
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={"div"}>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={"div"}>
                    <Link to="/About">About</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={"div"}>
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
