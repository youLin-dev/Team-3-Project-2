package com.revature;

import com.revature.daos.UserDao;
import com.revature.models.User;

import io.javalin.Javalin;

public class Launcher {
	public static void main(String[] args) {
		
		
		Javalin app = Javalin.create(
				config -> { 
					config.enableCorsForAllOrigins();	
				}).start(9000);
		
		//Placeholder for future HTTP handlers
		app.get("/login", ctx -> ctx.result("Iris Messenger Login Page"));
		
		
		UserDao ud = new UserDao();
		ud.createUser(new User("u","p"));
		
		System.out.println("-- "+ud.getUserbyUsername("u"));
		
		
	}
}
