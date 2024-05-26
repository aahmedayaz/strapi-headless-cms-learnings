import React, { useState } from 'react'
import {FormWrapper, Input} from '../components'
import axios from '../api/axios.js'

const Register = () => {

    // ------------------ States ------------------  
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [isUsernameValid, setIsUsernameValid] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    
    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    // ------------------ Regex --------------- 
    const usernameRegex = /^[a-zA-Z]{3,12}$/;
    const emailRegex = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;
    
    // ------------------ URL --------------- 
    const REGISTER_URL = '/register'

    // ------------------ Functions --------------- 
    const submitForm = async (e) => {
        e.preventDefault()

        // Username Validation
        if(!usernameRegex.test(username)){
            setUsernameError("Username can only contain letters and must be between 3 and 12 characters long.")
        }else{
            setIsUsernameValid(true)
            setUsernameError('')
        }

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


        if(isUsernameValid && isEmailValid && isPasswordValid){
            try {
                const response = await axios.post(REGISTER_URL, 
                    {username, email, password},
                    {
                        headers: {
                            "Content-Type" : "application/json"
                        }, 
                        withCredentials: true
                    }
                    )
                const data = await response.data
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <main className='w-[100%] bg-[#ffffff] h-screen text-white flex flex-col items-center pt-[40px]'>
            <section className='w-[600px] flex flex-col items-center p-[40px] bg-[#1f1f1f] rounded-[28px]'>
                <section className=''>
                    <h1 className='text-4xl font-bold text-[#1e774e]'>Create your Account</h1>
                    <span className='text-sm'>Please enter your details.</span>
                </section>
                <section className='w-[100%] p-[10px]'>
                    <FormWrapper 
                        btnText={"Create Account"} 
                        onSubmitHandler={submitForm}
                    >
                        <Input 
                            label='Name'
                            placeholder='Enter your username'
                            inputState={username}
                            onChangeHandler={(e) => handleUsername(e)}
                            error={usernameError}
                        />
                        <Input 
                            label='Email'
                            type='text'
                            placeholder='Enter your email address'
                            inputState={email}
                            onChangeHandler={(e) => handleEmail(e)}
                            error={emailError}
                        />
                        <Input 
                            label='Password'
                            type='password'
                            placeholder='Enter your password'
                            inputState={password}
                            onChangeHandler={(e) => handlePassword(e)}
                            error={passwordError}
                        />
                    </FormWrapper>
                </section>
            </section>
        </main>
    )
}

export default Register