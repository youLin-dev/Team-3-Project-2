package com.revature.controller;

import java.util.List;

import com.google.gson.Gson;
import com.revature.models.Message;
import com.revature.services.MessageService;

import io.javalin.http.Handler;

public class MessageController {

	MessageService ms = new MessageService();
	
	public Handler getMessageHandler = (ctx) -> {
		
		String body = ctx.body();
        Gson gson = new Gson();
        //System.out.println(body);
        //IDDTO ID = gson.fromJson(body, IDDTO.class);
        int id = gson.fromJson(body, int.class);
		
		
		if(AuthController.ses != null) {
			
			List<Message> messages = ms.getMessages(id);
			
			String JSONMessages = gson.toJson(messages);
			
			ctx.result(JSONMessages);
			
			ctx.status(200);
			
		} else {
			ctx.status(400);
		}
	};
	
	
	
}
