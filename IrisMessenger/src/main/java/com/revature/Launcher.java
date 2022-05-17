package com.revature;

import com.revature.daos.UserDao;
import com.revature.models.User;

public class Launcher {
	public static void main(String[] args) {
		
		//Temperary code for testing feel free to remove
		UserDao ud = new UserDao();
		ud.createUser(new User("u","p","000-000-0000"));
		
		System.out.println("-- "+ud.getUserbyUsername("u"));
		
		
	}//https://github.com/YouLin968/Team-3-Project-2.git
}
