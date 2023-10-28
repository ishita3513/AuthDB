import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Profile from '../pages/UpdateProfile'
import './Navbar.css'

function Navbar() {
    const isUserSignedIn = !!localStorage.getItem('token')
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    // const handleProfile=()=>{
    //     navigate('/updateprofile');
    // }
  return (
    <nav className='flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300'>
        <Link to='/'><h1 className='text-3xl'>AuthDB </h1></Link>
        <ul className='flex gap-6'>
            {isUserSignedIn ? (
                <>
                {/* <Link to='/account'><li>Account</li></Link> */}
                {/* <Link to='/updateprofile'>Profile</Link> */}
                
                <li><button onClick={handleSignOut} className='logout-button' >Sign Out</button></li>
                </>
            ) : (
                <>
                <Link to='/login'><li>Login</li></Link>
                <Link to='/signup'><li>Signup</li></Link>
                </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar