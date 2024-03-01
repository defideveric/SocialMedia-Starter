import React from 'react';
import './Home.css';
import ProfileSide from '../../components/profile/ProfileSide';

const Home = () => {
  return (
    <div className='Home'>
    <ProfileSide/>
    <div className='postSide'>Post</div>
    <div className='rightSide'>Right Side</div>

    </div>
  )
}

export default Home
