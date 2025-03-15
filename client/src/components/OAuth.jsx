import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { app } from '../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice.js'
import { useNavigate } from 'react-router-dom'
const OAuth = () => {
      const auth = getAuth(app)
     const dispatch = useDispatch()
     const navigate = useNavigate()
    const handleClickGoogle = async()=>{  
     
              const provider = new GoogleAuthProvider()
              provider.setCustomParameters({prompt: "select_account"})
            try {
                const resultfromGoogle = await signInWithPopup(auth,provider) 
               const resp = await fetch("/api/auth/google",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name:resultfromGoogle.user.displayName,
                    email:resultfromGoogle.user.email,
                    googlePhotoUrl:resultfromGoogle.user.photoURL
                  }),
               })
               console.log(resultfromGoogle)
               const data = await resp.json()
               if(resp.ok){
                dispatch(signInSuccess(data))
                navigate("/")
               }
               
            } catch (error) {
                console.log(error)
            }
    }
  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleClickGoogle}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
    </Button>
  )
}

export default OAuth
