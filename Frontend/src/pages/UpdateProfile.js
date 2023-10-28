import React, { useState } from 'react';
import './Style.css'
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom'

function Profile() {
    const locationState = useLocation().state;
    console.log(locationState);

  const username= useLocation().state.username;
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
        axios
        .post('http://localhost:3001/updateprofile', { username, newEmail, newPassword })
        .then(() => {
            alert('Profile updated successfully')
            setNewEmail('')
            setNewPassword('')
            navigate('/account')
        })
        .catch((error) => {
            console.log('Profile update failed')
        })
  };

  return (
    <div>
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
    </div>
  );
}

export default Profile;
