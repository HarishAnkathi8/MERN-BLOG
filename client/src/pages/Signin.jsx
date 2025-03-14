import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Signin = () => {
  const [formData,setFormData] = useState({})
  const [errorMessage,setErrorMessage] =useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value.trim()})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!formData.email || !formData.password){
       return setErrorMessage("Please filled the All the fileds")
    }
    try {
      setIsLoading(true)
          const resp = await fetch("/api/auth/signin",
            {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(formData)
           }
          )
          const data = await resp.json()
          if(data.succes === false){
          return  setErrorMessage(data.message)
          }
          setIsLoading(false)
          if(resp.ok){
            navigate("/")
          }
    } catch (error) {
      setErrorMessage(error.message)
      setIsLoading(false)
    }
  }
  
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
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
             
              <div >
                <Label value='Your Email'/>
                <TextInput type='email'  id='email' placeholder='example@company.com'onChange={handleChange} />
              </div>
              <div >
                <Label value='Your password'/>
                <TextInput type='password'  id='password' placeholder='Your password'onChange={handleChange} />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' disabled={isLoading}>
                {
                  isLoading ? (
                    <>
                      <Spinner size='sm'/>
                      <span>Loading...</span>
                    </>
                  ) : ("Signin")
                }
              </Button>
            </form> 
          <div className='flex gap-2 text-sm mt-5'>
              <span>Don't Have an Account ?</span>
              <Link to="/signup" className='text-blue-500'>Sign Up</Link>
          </div>
         {
          errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )
         }
         
          </div>
        
        </div>
    </div>
  )
}

export default Signin

