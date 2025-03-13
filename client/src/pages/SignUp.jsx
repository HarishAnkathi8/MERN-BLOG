import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
        <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
          {/* left */}
          <div className='flex-1'>
          <Link className='text-4xl font-bold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Varma's</span>Blog
        </Link>
        <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in rerum corporis praesentium veritatis cum, libero ex tenetur dolore dicta, quam, architecto quisquam! Sint dicta quisquam ea voluptates laboriosam maiores!</p>
          </div>
          {/* right */}
          <div className='flex-1'>
            <form className='flex flex-col gap-4'>
              <div>
                <Label value='Your user name'/>
                <TextInput type='text'  id='username' placeholder='Your Username' />
              </div>
              <div >
                <Label value='Your Email'/>
                <TextInput type='email'  id='email' placeholder='example@company.com' />
              </div>
              <div >
                <Label value='Your password'/>
                <TextInput type='password'  id='password' placeholder='Your password' />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
            </form> 
          <div className='flex gap-2 text-sm mt-5'>
              <span>Have an Account ?</span>
              <Link to="/signin" className='text-blue-500'>Sign in</Link>
          </div>
          </div>
        
        </div>
    </div>
  )
}

export default SignUp
