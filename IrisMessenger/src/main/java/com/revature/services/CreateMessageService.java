package com.revature.services;

import com.revature.daos.ChatDao;
import com.revature.daos.MemberDao;
import com.revature.daos.MessageDao;
import com.revature.daos.UserDao;
import com.revature.models.CreateMessageDTO;
import com.revature.models.Member;
import com.revature.models.Message;

public class CreateMessageService {

	public void CreateMessage(CreateMessageDTO cmDTO2) {
	
	UserDao ud = new UserDao();
    ChatDao cd = new ChatDao();
    CreateMessageDTO cmDTO = new CreateMessageDTO();
    MessageDao md = new MessageDao();
    MemberDao memd = new MemberDao();
    Member member = memd.getMemberbyUserAndChat(ud.getUserById(cmDTO2.getUser_id()),cd.getChatById(1));
    md.createMessage(new Message(cmDTO2.getMessage_text(),"",cd.getChatById(1),member));
    
    
    
	}
}
