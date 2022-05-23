package com.revature.services;

import java.util.List;

import com.revature.daos.ChatDao;
import com.revature.daos.MemberDao;
import com.revature.daos.UserDao;
import com.revature.models.Member;

public class MemberService {

	MemberDao mbDAO = new MemberDao();
	
	ChatDao cDAO = new ChatDao();
	
	UserDao uDAO = new UserDao();
	
	public List<Member> getMembers(int memberId) {
		
		List<Member> members = mbDAO.getMembersbyChat(uDAO.getUserById(memberId), cDAO.getChatById(1));
		
		
		return members;
		
	}
	
}
