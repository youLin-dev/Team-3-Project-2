package com.revature.daos;

import java.util.List;

import javax.persistence.NoResultException;
import javax.persistence.Query;

import org.hibernate.Session;

import com.revature.models.Chat;
import com.revature.models.User;
import com.revature.utils.HibernateUtil;

public class ChatDao {
	/** adds new object to the data base
	 * 
	 * 
	 * @param member
	 * @return object that you inserted to the database. (so you can get the id)
	 */
	public Chat createChat(Chat chat){
		Session ses = HibernateUtil.getSession();
		ses.save(chat);
		HibernateUtil.closeSession();
		System.out.println("-- "+chat+" added to database");
		return getChatByName(chat.getName());
	}
	/**
	 * 
	 * @param id
	 * @return chat object with matching id
	 */
	public Chat getChatById(int id) {
		Session ses = HibernateUtil.getSession();
		Chat u =ses.get(Chat.class, id);
		HibernateUtil.closeSession();
		return u;
	}
	/**
	 * 
	 * @param name
	 * @return user object with matching name, Null if no matching name
	 */
	public Chat getChatByName(String name) {
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM Chat m WHERE m.name = ?0");
		q.setParameter(0, name);
		Chat u;
		try {
			u = (Chat) q.getSingleResult();
		} catch (NoResultException e) {
			// TODO Auto-generated catch block
			u = null;
		}
		HibernateUtil.closeSession();
		return u;
	}
	/**
	 * 
	 * @return all chats
	 */
	public List<Chat> getChats(){
		Session ses = HibernateUtil.getSession();
		List<Chat> chatList = ses.createQuery("FROM Chat").list();
		HibernateUtil.closeSession();
		return chatList;
	}
	
}
