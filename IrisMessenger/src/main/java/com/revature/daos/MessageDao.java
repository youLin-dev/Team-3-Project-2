package com.revature.daos;

import java.util.List;

import javax.persistence.NoResultException;
import javax.persistence.Query;

import org.hibernate.Session;

import com.revature.models.Chat;
import com.revature.models.Member;
import com.revature.models.Message;
import com.revature.models.User;
import com.revature.utils.HibernateUtil;

public class MessageDao {
	public void createMessage(Message message) {
		Session ses = HibernateUtil.getSession();
		ses.save(message);
		HibernateUtil.closeSession();
		System.out.println("-- "+message+" added to database");
		
	}
	/**
	 * 
	 * @param user
	 * @param chat
	 * @return all messages ordered by id, 
	 */
	public List<Message> getMessagesbyChat(User user, Chat chat){
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM Message m WHERE m.chat_fk = ?0 ORDER BY m.message_id");
		q.setParameter(0, chat);
		List<Message> u = q.getResultList();
		HibernateUtil.closeSession();
		u.forEach((m) -> {
			if(m.getMember_fk().getUser_fk().getUser_id() == user.getUser_id()) {
				m.setOwned(true);
			}else {
				m.setOwned(false);
			}
		});
		return u;
	}
}

