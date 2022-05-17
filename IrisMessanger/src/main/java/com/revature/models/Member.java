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
@Table(name = "members")
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column 
	private int member_id;
	
	@Column
	private String time_joined;
	
	@Column
	private String time_left;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user_fk;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private Chat chat_fk;

	public Member() {
		super();
	}

	public Member(int member_id, String time_joined, String time_left, User user_fk, Chat chat_fk) {
		super();
		this.member_id = member_id;
		this.time_joined = time_joined;
		this.time_left = time_left;
		this.user_fk = user_fk;
		this.chat_fk = chat_fk;
	}
	
	/**
	 * use this constructor
	 * @param time_joined
	 * @param user_fk
	 * @param chat_fk
	 */
	public Member(String time_joined, User user_fk, Chat chat_fk) {
		super();
		this.time_joined = time_joined;
		this.user_fk = user_fk;
		this.chat_fk = chat_fk;
	}
	
	
	@Override
	public String toString() {
		return "Member [member_id=" + member_id + ", time_joined=" + time_joined + ", time_left=" + time_left
				+ ", user_fk=" + user_fk.getUsername() + ", chat_fk=" + chat_fk.getChat_id() + "]";
	}

	public int getMember_id() {
		return member_id;
	}

	public void setMember_id(int member_id) {
		this.member_id = member_id;
	}

	public String getTime_joined() {
		return time_joined;
	}

	public void setTime_joined(String time_joined) {
		this.time_joined = time_joined;
	}

	public String getTime_left() {
		return time_left;
	}

	public void setTime_left(String time_left) {
		this.time_left = time_left;
	}

	public User getUser_fk() {
		return user_fk;
	}

	public void setUser_fk(User user_fk) {
		this.user_fk = user_fk;
	}

	public Chat getChat_fk() {
		return chat_fk;
	}

	public void setChat_fk(Chat chat_fk) {
		this.chat_fk = chat_fk;
	}
	
	
}

