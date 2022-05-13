package com.revature;

import com.revature.daos.UserDao;
import com.revature.models.User;

public class Launcher {
	public static void main(String[] args) {
		UserDao ud = new UserDao();
		ud.createUser(new User("u","p"));
		
		System.out.println("-- "+ud.getUserbyUsername("u"));
		
		
	}
}
