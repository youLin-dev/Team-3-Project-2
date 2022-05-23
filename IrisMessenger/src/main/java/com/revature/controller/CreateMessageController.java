package com.revature.controller;

import com.google.gson.Gson;
import com.revature.models.CreateMessageDTO;
import com.revature.services.CreateMessageService;

import io.javalin.http.Handler;

public class CreateMessageController {

	CreateMessageService cms = new CreateMessageService();
	
	public Handler createMessageHandler = (ctx) -> {
		
		String body = ctx.body();
        Gson gson = new Gson();
        //System.out.println(body);
        //IDDTO ID = gson.fromJson(body, IDDTO.class);
        @SuppressWarnings("unused")
		CreateMessageDTO cmDTO = gson.fromJson(body, CreateMessageDTO.class);
		
		cms.CreateMessage(cmDTO);
		
		ctx.status(201);
		
	};
	
}
