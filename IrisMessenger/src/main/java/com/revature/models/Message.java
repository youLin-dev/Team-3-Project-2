package com.revature.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "messages")
public class Message {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column 
	private int message_id;
	
	@Column
	private String message_text;
	
	@Column
	private String time_sent;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name = "chat_id")
	private Chat chat_fk;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name = "member_id")
	private Member member_fk;

	public Message(int message_id, String message_text, String time_sent, Chat chat_fk, Member member_fk) {
		super();
		this.message_id = message_id;
		this.message_text = message_text;
		this.time_sent = time_sent;
		this.chat_fk = chat_fk;
		this.member_fk = member_fk;
	}

	/**
	 * use this constuctor
	 * @param message_text
	 * @param time_sent
	 * @param chat_fk
	 * @param member_fk
	 */
	public Message(String message_text, String time_sent, Chat chat_fk, Member member_fk) {
		super();
		this.message_text = message_text;
		this.time_sent = time_sent;
		this.chat_fk = chat_fk;
		this.member_fk = member_fk;
	}

	@Override
	public String toString() {
		return "Message [message_id=" + message_id + ", message_text=" + message_text + ", time_sent=" + time_sent
				+ ", chat_fk=" + chat_fk.getName() + ", member_fk=" + member_fk.getUser_fk().getUsername() + "]";
	}

	public int getMessage_id() {
		return message_id;
	}

	public void setMessage_id(int message_id) {
		this.message_id = message_id;
	}

	public String getMessage_text() {
		return message_text;
	}

	public void setMessage_text(String message_text) {
		this.message_text = message_text;
	}

	public String getTime_sent() {
		return time_sent;
	}

	public void setTime_sent(String time_sent) {
		this.time_sent = time_sent;
	}

	public Chat getChat_fk() {
		return chat_fk;
	}

	public void setChat_fk(Chat chat_fk) {
		this.chat_fk = chat_fk;
	}

	public Member getMember_fk() {
		return member_fk;
	}

	public void setMember_fk(Member member_fk) {
		this.member_fk = member_fk;
	}
	
	
}
