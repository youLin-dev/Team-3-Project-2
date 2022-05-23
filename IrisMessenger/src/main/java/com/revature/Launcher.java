package com.revature;

import com.revature.controller.AuthController;
import com.revature.controller.CreateMessageController;
import com.revature.controller.MemberController;
import com.revature.controller.MessageController;
import com.revature.daos.UserDao;

import io.javalin.Javalin;

public class Launcher {
	public static void main(String[] args) {
		
		AuthController ac = new AuthController();
		
		MessageController mc = new MessageController();
		
		MemberController mbc = new MemberController();
		
		CreateMessageController cmc = new CreateMessageController();
		
		Javalin app = Javalin.create(
				config -> { 
					config.enableCorsForAllOrigins();	
				}).start(9000);
		
		//Placeholder for future HTTP handlers
		app.get("/iris", ctx -> ctx.result("Iris Messenger Login Page"));
		
		app.post("/login", ac.loginHandler);
		
		app.post("/message", mc.getMessageHandler);
		UserDao ud = new UserDao();
		ud.getUserById(1);
		
		app.post("/member", mbc.getMemberHandler);
		
		app.put("/send", cmc.createMessageHandler);
		
	}//https://github.com/YouLin968/Team-3-Project-2.git
}


//Get Members