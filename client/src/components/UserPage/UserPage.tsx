import { useNavigate } from 'react-router';
import './UserPage.css'
import { Button } from '@chakra-ui/react';

const UserPage = () => {
  return (
    <>
      <div className="bodyWrapper">
        <div className="ProfilePreview">
          <img src="https://cdn-icons-png.flaticon.com/512/848/848043.png"/>
          <h2>Name Hanzomain</h2>
          <p>Title maybe a specific seller</p>
          <p>About page about this person, he is kind</p>

        </div>
        <div className='ProfileEditor'>
          <div className="nameUsername">
            <h1>Profile</h1>
            <input />
            <h3>Full name</h3>
            <h3>Username</h3>
            <input />
          </div>
          <div className='prelim'>
            <h3>Location</h3>
            <input />
            <h3>Bio</h3>
            <input />
          </div>
          <Button 
            className="btnSaveListing"
            onClick={() => alert("Saved data")}
            type="submit">
            <b>Publish</b>
          </Button>
        </div>
      </div>
    </>
  )
}

export default UserPage