import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import {useSelector} from "react-redux"
const DashBoardProfile = () => {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <div className='max-w-xl mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
            <div className='w-32 h-32 self-center curser-pointer shadow-md overflow-hidden rounded-full '>
            <img src={currentUser.profilePicture} alt="User" className='w-full h-full rounded-full border-8 border-[lightgray]' />
            </div>
            <TextInput type='text' id='username' defaultValue={currentUser.username} />
            <TextInput type='email' id='email' defaultValue={currentUser.email} />
            <TextInput type='password' id='password' placeholder='password' />
            <Button type='submit' gradientDuoTone='purpleToBlue'>Update</Button>
      </form>
      <div className='text-red-700 flex justify-between mt-5'>
        <span>Delete Account?</span>
        <span>Sign Out</span>
      </div>
    </div>
  )
}

export default DashBoardProfile
