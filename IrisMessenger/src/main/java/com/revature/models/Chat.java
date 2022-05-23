package com.revature.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "chat_rooms")
public class Chat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column 
	private int chat_id;
	
	@Column
	private String chat_name;
	
//	@OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
//	@JoinColumn(name = "member_id")
//	private List<Member> member_fk;
	
//	@OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
//	@JoinColumn(name = "message_id")
//	private List<Message> message_fk;
	
	public Chat() {
		super();
	}

	public Chat(int chat_id, String name, List<Member> member_fk, List<Message> message_fk) {
		super();
		this.chat_id = chat_id;
		this.chat_name = name;
//		this.member_fk = member_fk;
//		this.message_fk = message_fk;
	}

	/**
	 * use this constructor.
	 * 
	 * @param name
	 */
	public Chat(String name) {
		super();
		this.chat_name = name;
	}

	public int getChat_id() {
		return chat_id;
	}

	public void setChat_id(int chat_id) {
		this.chat_id = chat_id;
	}

	public String getName() {
		return chat_name;
	}

	public void setName(String name) {
		this.chat_name = name;
	}

//	public List<Member> getMember_fk() {
//		return member_fk;
//	}
//
//	public void setMember_fk(List<Member> member_fk) {
//		this.member_fk = member_fk;
//	}
//
//	public List<Message> getMessage_fk() {
//		return message_fk;
//	}
//
//	public void setMessage_fk(List<Message> message_fk) {
//		this.message_fk = message_fk;
//	}

	@Override
	public String toString() {
		return "Chat [chat_id=" + chat_id + ", name=" + chat_name + ", member_fk=" + "member_fk" + "]";
	}
	
	
	
	
	
	
}
