import React, { useState } from 'react';

const AuthForm = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [NameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let error = false ;
    //     // We'll add validation logic later
    //     if (isSignup && name.trim() === '') {
    //         setNameError('Name is required');
    //         error = true ;
    //     }
    //     else{
    //         setNameError('');
    //     }
    //     if (email.trim() === '' || !email.includes("@")) {
    //         setEmailError('Invalid email');
    //         error = true ;
    //     }
    //     else{
    //         setEmailError('');
    //     }
    //     if (password.length < 6) {
    //         setPasswordError('Password must be at least 6 characters long');
    //         error = true ;
    //     }
    //     else{
    //      setPasswordError('');
    //     }
     const handleSubmit = (e) => {
        e.preventDefault();
        let error = false ;
        // We'll add validation logic later
        if (isSignup && name.trim() === '') {
            setNameError('Name is required');
            error = true ;
        }
      
        if (email.trim() === '' || !email.includes("@")) {
            setEmailError('Invalid email');
            error = true ;
        }
       
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            error = true ;
        }
       if(!error){
           setEmailError('');
           setPasswordError('');
           setNameError('');
       }
        if (error) {
            return;
        }
        if (isSignup) {
            console.log('Signup:', { name, email, password });
        }
        else {
            console.log('Login:', { email, password });
        }
    };

    return (
        <div className="p-8">
            <div className="mb-4">
                <button
                    className={`px-4 py-2 mr-2 ${isSignup ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setIsSignup(true)}
                >
                    Signup
                </button>
                <button
                    className={`px-4 py-2 ${!isSignup ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setIsSignup(false)}
                >
                    Login
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {isSignup && (
                    <div>
                        <label className="block">Name</label>
                        <input
                            type="text"
                            className="border p-2 w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    {NameError && <p className="text-red-500">{NameError} </p>}
                    </div>
                )}
                <div>
                    <label className="block">Email</label>
                    <input
                        type="email"
                        className="border p-2 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="text-red-500">{emailError} </p>}
                </div>
                <div>
                    <label className="block">Password</label>
                    <input
                        type="password"
                        className="border p-2 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p className="text-red-500">{passwordError} </p>}
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AuthForm;
