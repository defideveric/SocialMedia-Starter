import React from 'react';
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.png";
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className='profileCard'>
        <div className='profileImages'>
            <img alt='' src={Cover}/>
            <img alt='' src={Profile}/> 
        </div>

        <div className='profileName'>
            <span>Eric Hudson</span>
            <span>Front End Web Developer</span>
        </div>

        <div className='followStatus'>
            <hr/>
            <div>
                <div className='follow'>
                    <span>6,890</span>
                    <span>Followings</span>
                </div>
                <div className='vl'></div>
                <div className='follow'>
                    <span>1</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr/>
        </div>

        <span>
            My Profile
        </span>
    </div>
  )
}

export default ProfileCard
