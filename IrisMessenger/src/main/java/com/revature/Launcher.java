package com.revature;

import com.revature.controller.AuthController;

import io.javalin.Javalin;

public class Launcher {
	public static void main(String[] args) {
		
		AuthController ac = new AuthController();
		
		Javalin app = Javalin.create(
				config -> { 
					config.enableCorsForAllOrigins();	
				}).start(9000);
		
		//Placeholder for future HTTP handlers
		app.get("/iris", ctx -> ctx.result("Iris Messenger Login Page"));
		
		app.post("/login", ac.loginHandler);
		
		
	}//https://github.com/YouLin968/Team-3-Project-2.git
}
