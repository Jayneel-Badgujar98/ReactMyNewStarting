import React from 'react'
import { useState } from 'react'

const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSumit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setNameError("Please enter your name")

    }
    if (email.trim() === "") {
      setEmailError("Please enter your email")
      return;
    }
    else if (!email.includes("@")) {
      setEmailError("Please enter a valid email")
    }
    console.log(`Name : ${name} , Email : ${email}`)
    setNameError("");
    setEmailError("");
    setIsSubmit(true);

  }

  return (
    <div className='bg-gray-300'>
      <form onSubmit={handleSumit} className='p-8'>
        <div>
          <label>Name</label>
          <input type="text" className="border-2 p-1 w-52 m-4 cursor-pointer " value={name} onChange={(e) => setName(e.target.value)} />
          {nameError && <p className='text-red-500'>{nameError}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" className="border-2  p-1 w-52 m-4 cursor-pointer " value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p className='text-red-500'>{emailError}</p>}
        </div>
        <button type="submit" className='border-2 p-1 w-52 m-4 cursor-pointer'>Submit</button>
        {isSubmit && <p className='text-green-500'>Form submitted successfully</p>}
        <div>
          <button type="reset" className='border-2 p-1 w-52 m-4 cursor-pointer' onClick={() => { setName(""); setEmail(""); setIsSubmit(false); setNameError(""); setEmailError("") }}>Reset</button>

        </div>
      </form>

    </div>
  )
}

export default ContactUs