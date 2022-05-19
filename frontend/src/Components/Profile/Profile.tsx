
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import "./profile.css";
import userImage from "../../assets/default-avatar.png";
import { useDispatch, useSelector } from "react-redux"
//const ProfilePage = (props:any)=>{

export const ProfilePage: React.FC<any> = (props:any)=>{ 
    ///
return(
<div className="profile mb130"> 
    <div className="smallCol">
           <div className="sidebar--menu">
            <Link className="link--btn" to="/">Home</Link>
            <Link className="link--btn" to="/">Edit Profile</Link>
            <Link className="link--btn" to="/logout">Logout</Link>
            </div>
    </div>
    <div className="midCol borderBox">
      
        <div className="chatForm">
            <textarea placeholder="Enter your message"></textarea>
            <button className="profile-button" >Send !</button>
        </div>
    </div>
    <div className="smallCol">
        <div className="userBox">
            <span className="userpic">
            <img src={userImage}/>
            </span>
            <span>
               Username
               </span> 
        </div>
    </div>
</div>

)
}

