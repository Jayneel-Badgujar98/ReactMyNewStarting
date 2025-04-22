import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (username.trim() === '' || password.trim() === '') {
                setError('Please enter username and password')
                return;
            }
            if (password.length < 6) {
                setError('Password must be at least 6 characters long')
                return;
            }
            setLoading(true)
            setError('')
            const user = { email: username, password }
            const response = await axios.post("https://reqres.in/api/login", user)

            localStorage.setItem("token", response.data.token);
            navigate('/dashboard')
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>




        </div>
    )
}

export default Login