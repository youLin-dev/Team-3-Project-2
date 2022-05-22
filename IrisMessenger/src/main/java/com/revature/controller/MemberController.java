package com.revature.controller;

import java.util.List;

import com.google.gson.Gson;
import com.revature.models.Member;
import com.revature.services.MemberService;

import io.javalin.http.Handler;

public class MemberController {

	MemberService mbs = new MemberService();
	
	public Handler getMemberHandler = (ctx) -> {
		
		String body = ctx.body();
        Gson gson = new Gson();
        System.out.println("-- "+body);
        //IDDTO ID = gson.fromJson(body, IDDTO.class);
        int id = gson.fromJson(body, int.class);
        
        if(AuthController.ses != null) {
        	
        	List<Member> members = mbs.getMembers(id);
        	
        	String JSONMembers = gson.toJson(members);
        	System.out.println(JSONMembers);
        	ctx.result(JSONMembers);
        	
        	ctx.status(200);
        	
        } else {
        	
        	ctx.status(400);
        	
        }
		
		
	};
	
}
