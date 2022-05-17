package com.revature.daos;

import java.util.List;

import javax.persistence.Query;

import org.hibernate.Session;

import com.revature.models.Chat;
import com.revature.models.User;
import com.revature.utils.HibernateUtil;

public class ChatDao {
	
	public void createChat(Chat chat){
		Session ses = HibernateUtil.getSession();
		ses.save(chat);
		HibernateUtil.closeSession();
		System.out.println("-- "+chat+" added to database");
	}
	
	public Chat getChatById(int id) {
		Session ses = HibernateUtil.getSession();
		Chat u =ses.get(Chat.class, id);
		HibernateUtil.closeSession();
		return u;
	}
	
	public Chat getChatByName(String name) {
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM Chat m WHERE m.username = ?0");
		q.setParameter(0, name);
		List<Chat> u = q.getResultList();
		HibernateUtil.closeSession();
		return u.get(0);
	}
	
	public List<Chat> getChats(){
		Session ses = HibernateUtil.getSession();
		List<Chat> chatList = ses.createQuery("FROM Chat").list();
		HibernateUtil.closeSession();
		return chatList;
	}
	
}
