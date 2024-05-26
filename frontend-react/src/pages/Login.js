import React, { useContext, useState } from 'react'
import {FormWrapper, Input} from '../components'
import axios from '../api/axios'
// import AuthContext from '../context/AuthContext'

const Login = () => {

    // ------------------ States --------------- 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    // ------------------ URL --------------- 
    const LOGIN_URL = '/login'

    // ------------------ Interface --------------- 


    // ------------------ Context --------------- 
    // const {setAuth} = useContext(AuthContext)!
    // console.log(setAuth)

    // ------------------ Regex --------------- 
    const emailRegex = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;

    // ------------------ Functions --------------- 
    const handleEmail = (e) => {
        setEmail(e.target.value)
    
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const submitForm = async(e) => {
        e.preventDefault()

        // Email validation
        if(!emailRegex.test(email)){
            setEmailError("Please enter a valid email address.")
        }else{
            setIsEmailValid(true)
            setEmailError('')
        }

        // Password validation
        if(!passwordRegex.test(password)){
            setPasswordError("Please include at least one uppercase letter and a number. It must be at least 8 characters long.")
        }else{
            setIsPasswordValid(true)
            setPasswordError('')
        }

        if(isEmailValid && isPasswordValid){
            try{
                const response = await axios.post(LOGIN_URL, {email, password}, {
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    withCredentials: true
                })
                
                const data = await response.data
                
            }
            catch(error){

            }
        }
    }

    return (
        <main className='w-[100%] bg-[#ffffff] h-screen text-white flex flex-col items-center pt-[40px]'>
            <section className='w-[600px] flex flex-col items-center p-[40px] bg-[#1f1f1f] rounded-[28px]'>
                <section className=''>
                    <h1 className='text-4xl font-bold text-[#1e774e]'>Log in to your Account</h1>
                    <span className='text-sm'>Please enter your details.</span>
                </section>
                <section className='w-[100%] p-[10px]'>
                    <FormWrapper 
                        btnText='Login'
                        onSubmitHandler={submitForm}
                    >
                        <Input 
                            inputState={email}
                            onChangeHandler={(e) => handleEmail(e)}
                            placeholder='Enter your Email'
                            error={emailError}
                        /> 

                        <Input 
                            inputState={password}
                            onChangeHandler={(e) => handlePassword(e)}
                            placeholder='Enter your Password'
                            error={passwordError}
                        />

                    </FormWrapper>
                </section>
            </section>
        </main>
    )
}

export default Login