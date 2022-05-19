//types holds all possible objects/types

import { IsUnknownOrNonInferrable } from "@reduxjs/toolkit/dist/tsHelpers";
import internal from "stream";

//declare some types as interfaces
export interface IUser {
    id:0,
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string
}

export interface Chat { 
    id:0,
    chatName: string;  
}

//AppState object that will store one of each interface
//type keyword like calling something an object in Java
export type AppState = {
<<<<<<< HEAD:frontend/src/store/types.ts
    user: User,
    chatName: Chat,
    messages: Messages,
    //message: Message
}

export interface Message {

        messageText: string;
        sentDateTime: string;
        byMe: boolean;


}

export interface Messages{
        m: Message[]
}
=======
    user: IUser,
    chatName: Chat,
    message: message

}

export interface message {
        messageId: number;
        groupMemberId: number;
        messageText: string;
        sentDateTime: string;
        chatId: number

    }
>>>>>>> 53c2549739fb282265ec4756582893dd89989ba5:frontend/src/Components/store/types.ts


//