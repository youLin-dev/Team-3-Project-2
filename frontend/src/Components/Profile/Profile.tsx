
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import "./profile.css";
import userImage from "../../assets/default-avatar.png";
import { useDispatch, useSelector } from "react-redux"
//import Chatbox from "../Message/ChatBox";
import RegisterPage from "../Login/Register";
import { DisplayMembers } from "../Member/DisplayMembers";
import { Chat } from "../Message/Chat";
import { getMembers } from "../../actions/MemberActions";
import { getMessages } from "../../actions/MessageActions";
import { logOut } from "../../actions/LogoutAction";
//import Chatbox from "../Message/ChatBox";
//const ProfilePage = (props:any)=>{
 let timer: NodeJS.Timer | undefined;
export const ProfilePage: React.FC<any> = (props:any)=>{ 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const a = document.getElementById("rf").addEventListener("click", function (evt) { return refreshMembers(); });
    const appState = useSelector<any, any>((state) => state);
    let timer: any;

    const refreshChat =async () => {
        console.log("refreshing mmembers")
        await dispatch(
            getMessages(appState.user.id) as any
        )
    }

    useEffect(() => {
        if(appState.user.id > 0){
            refreshMembers();
            //timer = setInterval(refreshChat, 5000); 
        }
    }, [])
    
    const refreshMembers = async () => {
        console.log("refreshing mmembers")
        await dispatch(
            getMembers(appState.user.id) as any
        )
        refreshChat();
    }
    const logout =async () => {
        console.log("logging out")
        
        await dispatch(
            logOut() as any
        )
        clearInterval(timer);
        timer = undefined;
        console.log(appState.user)
        navigate("/");
    }

return(
<div className="profile mb130"> 
    <div className="smallCol">
           <div className="sidebar--menu">

            <Link className="link--btn" to="/" onClick={logout}>Logout</Link>
            </div>
    </div>
    <div className="midCol borderBox">
      <div>
          <Chat/>
      </div>
    
    <form>
        <div className="chatForm">
            <div className="chatForm">
                <textarea placeholder="Enter your message"></textarea>
                <button className="profile-button" >Send !</button>
            </div>
        </div>
  </form>

              
    </div>
    <div className="smallCol">
        <div className="userBox">
            <span className="userpic">
            <img src={userImage}/>
            </span>
            <span>
               Chat Members:  
            </span> 
            <button  id="rf" className="member-button" value="rf" onClick={refreshMembers}>Refresh</button>
            <DisplayMembers/>
        </div>
    </div>
    
</div>

)
}

//            <Link className="link--btn" to="/">Home</Link>
//<Link className="link--btn" to="/">Edit Profile</Link>