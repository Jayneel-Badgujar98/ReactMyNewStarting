// components/Signup.jsx

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { signupSchema } from "../validations/signupSchema";
// import { z } from "zod";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // default role
  });
  const { register } = useAuth();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Zod validation
    const result = signupSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      if (result.error.issues) {
        result.error.issues.forEach(issue => {
          fieldErrors[issue.path[0]] = issue.message;
        });
      }
      setErrors(fieldErrors);
      console.log(fieldErrors);
      return;
    }


    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("User registered successfully!");
        register(data.token); // Call register function from AuthContext
        // Redirect to login page after successful registration
      } else {
        alert(data.message || "Error registering user");
      }

    } catch (err) {
      console.error("Signup Error:", err.message);
      alert("Something went wrong");
    }
  };

  return (
    <div className='w-full h-full'>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-6 bg-white rounded-xl shadow-md min-h-fit max-w-md mx-auto my-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg text-black"
        />
        {errors.name && <p className='text-red-500'>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg text-black"
        />
        {errors.email && <p className='text-red-500'>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg text-black"
        />
        {errors.password && <p className='text-red-500'>{errors.password}</p>}
        <button
          type="submit"
          className="p-3 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-900 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>

  );
}
