import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Style.css';

function Login() {
    // const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:3001/register')
        .then((res) => {
            console.log(res.data)
        })
    }
    const handleLogin =  async (event) => {
        event.preventDefault();
        try {
            const response = await axios
            .post('http://localhost:3001/login', { username, password })
            const token = response.data.token
            alert('Login successful')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/account',{ state: { username } })
            window.location.reload();
            localStorage.setItem('token', token)
        } 
        catch (error) {
            // alert('Please check your username and password')
            // console.log('Login Error', error)
            setUsername('')
            setPassword('')
            setShowAlert(true);
        }
    }


  return (
    <div className='w-full h-screen flex'>
         {/* <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'> */}
         <div className='container'>
            <h1>Login Page</h1>
            <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
            onSubmit={handleLogin}
            >
                 {/*Username Input */}
                 <label>Username</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl  p-2'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <br />
                <br />
                 {/* Password Input */}
                 <label>Password</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl p-2'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                {/* Button */}
                <button className='login-button'
                type='submit' onClick={handleLogin}>Login</button>
                { showAlert && <div className='alert'>Wrong Username or password !!! </div>}
            </form>
        </div>
        {/* <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
            <h2 className='text-3xl text-white '>Login</h2>
        </div> */}
    </div>
  )
}

export default Login