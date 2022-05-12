package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column 
	private int user_id;
	
	@Column(unique = true, nullable = false) 
	private String username;
	
	@Column(nullable = false)
	private String pass_word;

	public User() {
		super();
	}

	//these two constructors and the toString() will need to be regenerated in the future if more fields are added
	public User(int user_id, String username, String pass_word) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.pass_word = pass_word;
	}

	public User(String username, String pass_word) {
		super();
		this.username = username;
		this.pass_word = pass_word;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", username=" + username + ", pass_word=" + pass_word + "]";
	}
	
	
	
	
}
