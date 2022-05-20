package com.revature.models;

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
import java.util.List;

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
	
	@Column
	private String first_name;
	@Column
	private String last_name;
	@Column(unique = true, nullable = false, length = 12)
	private String phone_number;
	
	@OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name = "member_id")
	private List<Member> member_fk;
	
	public User() {
		super();
	}

	//these methods will need to be regenerated if fields are eddited
	public User(int user_id, String username, String pass_word, String first_name, String last_name,
			String phone_number) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.pass_word = pass_word;
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_number = phone_number;
	}
	
	public User(int user_id, String username, String pass_word, String first_name, String last_name,
			String phone_number, List<Member> member_fk) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.pass_word = pass_word;
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_number = phone_number;
		this.member_fk = member_fk;
	}

	public User(String username, String pass_word, String first_name, String last_name, String phone_number) {
		super();
		this.username = username;
		this.pass_word = pass_word;
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_number = phone_number;
	}

	public User(String username, String pass_word, String phone_number) {
		super();
		this.username = username;
		this.pass_word = pass_word;
		this.phone_number = phone_number;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", username=" + username + ", pass_word=" + pass_word + ", first_name="
				+ first_name + ", last_name=" + last_name + ", phone_number=" + phone_number + "]";
	}
	
	
	public List<Member> getMember_fk() {
		return member_fk;
	}

	public void setMember_fk(List<Member> member_fk) {
		this.member_fk = member_fk;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPass_word() {
		return pass_word;
	}

	public void setPass_word(String pass_word) {
		this.pass_word = pass_word;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	
	
	
	
}
