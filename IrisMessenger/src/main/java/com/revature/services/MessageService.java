package com.revature.services;

import java.util.List;

import com.revature.daos.ChatDao;
import com.revature.daos.MessageDao;
import com.revature.daos.UserDao;
import com.revature.models.Message;



public class MessageService {

	MessageDao mDAO = new MessageDao();
	
	ChatDao cDAO = new ChatDao();
	
	UserDao uDAO = new UserDao();
	
	public List<Message> getMessages(int userId) {
		
		List<Message> messages = mDAO.getMessagesbyChat(uDAO.getUserById(userId), cDAO.getChatById(1));
		
		
		
		
		return messages;
	}
	
}
