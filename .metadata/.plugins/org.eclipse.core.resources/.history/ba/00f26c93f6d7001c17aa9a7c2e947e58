package com.revature.services;

import com.revature.daos.UserDao;
import com.revature.models.User;

public class AuthService {

	public User login(String username, String password) {
	
		UserDao ud = new UserDao();
		
        User u = ud.getUserbyUsername(username);
        if(u != null) {
        	
            if(u.getPass_word().equals(password)) {return u;}else {return null;}
            
        }else {return null;}

	}
	
}
