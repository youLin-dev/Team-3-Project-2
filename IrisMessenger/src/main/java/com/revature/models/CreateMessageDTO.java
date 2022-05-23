package com.revature.models;

public class CreateMessageDTO {

	int user_id;
	
	String message_text;

	public CreateMessageDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CreateMessageDTO(int user_id, String message_text) {
		super();
		this.user_id = user_id;
		this.message_text = message_text;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getMessage_text() {
		return message_text;
	}

	public void setMessage_text(String message_text) {
		this.message_text = message_text;
	}
	
	
	
}
