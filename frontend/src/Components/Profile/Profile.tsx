
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
import { sendMessage } from "../../actions/SendActions";
//import Chatbox from "../Message/ChatBox";
//const ProfilePage = (props:any)=>{
 let timer: NodeJS.Timer | undefined;
export const ProfilePage: React.FC<any> = (props:any)=>{ 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [message_text, setmess] = useState("");
    const [user_id, setId] = useState(0);
    //const a = document.getElementById("rf").addEventListener("click", function (evt) { return refreshMembers(); });
    const appState = useSelector<any, any>((state) => state);
    let timer: any;

    const refreshChat =async () => {
        console.log("refreshing chat")
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
        console.log("refreshing members")
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
    let [text,setText] = useState("")
    const handleChange =async (e:any) => {
        console.log(e.target.value)
        setText(e.target.value)
    }
    

    const send =async () => {
        
        setId(appState.user.id);
        //console.log(user_id);
        if(appState.user.id > 0){
        await dispatch(
            sendMessage({
                user_id: appState.user.id, 
                message_text: text
            }) as any
            
        )
        refreshChat()
        }
        //setVal("");
    }
    
    //onChange={handleChange}  onClick={send}
return(
<div className="profile mb130"> 
    <div className="smallCol">


           <div className="sidebar--menu">

            <Link className="link--btn" to="/" onClick={logout}>Logout</Link>
            </div>
    </div>
    <div className="midCol borderBox">
      <div className="chat-box">
          <Chat/>
      </div>
    
    <form>
        <div className="chatForm">
            
                <textarea placeholder="Enter your message"  onChange={handleChange}></textarea>
                <Link id="s" className="profile-button" to="/Profile" onClick={send}>Send !</Link>
            
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
            <button  id="rf" className="member-button"  onClick={refreshMembers}>Refresh</button>
            <DisplayMembers/>
        </div>
    </div>
    
</div>

)
}

//            <Link className="link--btn" to="/">Home</Link>
//<Link className="link--btn" to="/">Edit Profile</Link>