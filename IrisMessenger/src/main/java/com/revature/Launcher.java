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
		
		


		
		
	}//https://github.com/YouLin968/Team-3-Project-2.git
}
