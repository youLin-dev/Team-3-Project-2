//types holds all possible objects/types

import { IsUnknownOrNonInferrable } from "@reduxjs/toolkit/dist/tsHelpers";

//declare some types as interfaces
export interface User {
    id:0,
    username: string;
    password: string;

}

export interface Chat { 
    id:0,
    chatName: string;  
}

//AppState object that will store one of each interface
//type keyword like calling something an object in Java
export type AppState = {
    user: User,
    chatName: Chat

}
//