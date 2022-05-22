import axios from "axios";
import { User } from "../store/types";
import { LOGIN_USER, LOGOUT } from "./actionTypes";

export const logOut = () =>async (dispatch:any) => {
    const resetUser: User = {
        id: 0,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
    }
    return dispatch({
        type: LOGOUT,
        payload: resetUser
    })
}