import React from 'react'
import { useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar';

const UserPage = () => {
  return (
    <>
      <Navbar />
      <div className="bodyWrapper">
        <div className="ProfilePreview">
          
        </div>
        <div className='ProfileEditor'>

        </div>
      </div>
      <p>UserPage</p>
    </>
  )
}

export default UserPage