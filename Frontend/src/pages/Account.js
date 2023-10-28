// import React from 'react'
// import './Style.css'
// import { useState, useEffect } from 'react'
      
// function Account() {
//   return (
//     <div className='page'>
//       <h2 className='pagetext'> Hi {username} </h2>
//     </div>
//   )
// }

// export default Account


import React,{ useState }  from 'react';
import { useLocation } from 'react-router-dom';
import './Style.css';
import Card from './Card';
import axios from 'axios';

function Account() {
  // Retrieve the username from the location state
  const location = useLocation();
  const username = location.state.username;

  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
 

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
        axios
        .post('http://localhost:3001/updateprofile', { username, newEmail, newPassword })
        .then(() => {
            alert('Profile updated successfully')
            setNewEmail('')
            setNewPassword('')
        })
        .catch((error) => {
            console.log('Profile update failed')
        })
  };


  return (
    <div className='page'>
      <h2 className='pagetext'>Hi {username}</h2>
      {/* <Profile /> */}

      <div className='container'>
            <h1>Profile Management</h1>
            <form className='text-center border rounded-lg w-[600px] h-[230px] p-9'
            // onSubmit={handleProfileUpdate}
            >
        <input
          className='w-[400px] h-[40px] rounded-xl p-2 m-2'
          type="email"
          value={newEmail}
          placeholder='new email'
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <br />
        <input
          className='w-[400px] h-[40px] rounded-xl p-2 m-2'
          type="password"
          value={newPassword}
          placeholder='new password'
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <button type="submit" className='update-button' onSubmit={handleProfileUpdate} >Update Profile</button>
      </form>
      </div>

      <div className="card-container">
        <Card
          title="Blog Post 1"
          content="This is Developers github account. If you like give her a star. If you find and issue and have solution give a pull request."
          link="https://github.com/ishita3513"
        />

        <Card
          title="Blog Post 2"
          content="Connect with developer on LinkedIn"
          link="https://www.linkedin.com/in/Ishita3513/"
        />
      </div>
    </div>
    
  );
}

export default Account;
