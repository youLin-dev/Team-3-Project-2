//file combines user and chat reducers
//a one stop shop for new data comingin that needs to be dispatched

import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./UserReducer";


export default combineReducers({

    user:userReducer,
   
})