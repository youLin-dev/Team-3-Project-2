//file combines user and chat reducers
//a one stop shop for new data comingin that needs to be dispatched

import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./UserReducer";


export default combineReducers({

    user:userReducer,
   
})

//this isn't required for the appl to work, but it reduces the load.
//imagine we had 50 reducers for 50 different possible object...
//best to store them all in a combineReducer so you only ever have to call one thing