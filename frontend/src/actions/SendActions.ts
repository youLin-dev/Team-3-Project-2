import axios from "axios";
import { User } from "../store/types";
import { LOGIN_USER, SEND_MESSAGE } from "./actionTypes";

export interface SendDTO{
    user_id:number;
    message_text:String;
}
export const sendMessage = (I:SendDTO) => async (dispatch:any) =>{
    console.log("sending message")
    console.log(I);
    let u:User;
    if(I.user_id != 0){
    try {
        const r = await axios.put('http://localhost:9000/send', I);

        console.log(r.status);
        u ={
            
            id: I.user_id,
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: ""

            

        }
        return dispatch({
            type: LOGIN_USER,
            payload: u
        })

    } catch (e) {
        console.log(e);
    }
}else{console.log("invalid user id, message not sent")}
}