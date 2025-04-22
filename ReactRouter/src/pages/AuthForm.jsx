import React, { useState as ust } from 'react'

const AuthForm = () => {
    const [isSignup, setIsSignup] = ust(null);
    const [email, setEmail] = ust("");
    const [password, setPassword] = ust("");
    const [name, setName] = ust("");
    const [isSubmitted, setisSubmitted] = ust(false);
    const [emailError, setEmailError] = ust("");
    const [passwordError, setPasswordError] = ust("");
    const [nameError, setNameError] = ust("");

    const handleSubmit = (e) => {
        e.preventDefault();


        if (isSignup && name.trim() === "") {
            setNameError("Please enter your name")
        }
        if (name.trim() === "" && isSignup) {
            setNameError("Please enter your name")
        }
        if (email.trim() === "") {
            setEmailError("Please enter your email")
        }
        if (password.trim() === "") {
            setPasswordError("Please enter your password")
        }
        if (password.length < 6) {
            setPasswordError("Password should be at least 6 characters");
            return;
        }
        else if (!email.includes("@")) {
            setEmailError("Please enter a valid email")

        }
        if (isSignup) {
            console.log(`Name : ${name} , Email : ${email} , Password : ${password}`)
            setEmailError("");
            setPasswordError("");
            setNameError("");
            setisSubmitted(true);
        }
        console.log(`Email : ${email} , Password : ${password}`)
        setEmailError("");
        setPasswordError("");
        setisSubmitted(true);
    }


    return (
        <div className='bg-gray-300'>
            <button className='m-4 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setIsSignup(true)}>Signup</button>
            <button className='m-4 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setIsSignup(false)}>Login</button>
            {isSignup !== null &&
                <form onSubmit={handleSubmit} className='p-10'>
                    {isSignup && (
                        <div>
                            <label>Name</label>
                            <input type="text" className="border-2  p-1 w-52 m-4 cursor-pointer" value={name} onChange={(e) => setName(e.target.value)} />
                            {nameError && <p>{nameError}</p>}
                        </div>
                    )
                    }
                    <label>Email</label>
                    <input type="email" className="border-2  p-1 w-52 m-4 cursor-pointer" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p className='text-red-500'>{emailError}</p>}
                    <br />
                    <label>Password</label>
                    <input type="password" className="border-2  p-1 w-52 m-4 cursor-pointer" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <p className='text-red-500'>{passwordError}</p>}
                    <br />
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                    {isSubmitted && <p className='text-green-500'>Form submitted successfully</p>}
                    <br />
                    <button type="reset" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setEmail(""); setPassword(""); setName(""); setisSubmitted(false); setEmailError(""); setPasswordError(""); setNameError("") }}>Reset</button>
                </form>
            }
        </div>
    )
}

export default AuthForm;