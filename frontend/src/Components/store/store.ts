//Actual store file, all active data in application
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

import { AppState } from "./types";


//the initial stat of app in store will have default objects
const initialState:AppState = {
    user: {
        id: 0,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
    },
    //here may go the initial state of the chat page should be empty
    //when a message is posted the chat object will get populated with message data
    

    //here may go the initial state of the chat page should be empty
    //when a message is posted the chat object will get populated with message data
    chatName: {
        id: 0,
        chatName: ""
    },

   message: {
        messageId:0,
        groupMemberId:0,
        messageText:"",
        sentDateTime:"",
        chatId:0
 
    }


}



//Reducer folder is contained in this "reducer" object
//when store data changes, reducers auto notify comonents, which change their view
export const store = configureStore({
    reducer
})

