package com.revature.daos;

import com.revature.models.Chat;
import com.revature.models.Member;
import com.revature.models.User;
import com.revature.utils.HibernateUtil;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import java.util.List;

import javax.persistence.NoResultException;
import javax.persistence.Query;

public class UserDao {
	/**
	 * Adds given user to the users table
	 * */
	public User createUser(User user) {
		Session ses = HibernateUtil.getSession();
		ses.save(user);
		HibernateUtil.closeSession();
		System.out.println("-- "+user+" added to database");
		return getUserbyUsername(user.getUsername());
	}
	
	/**
	 * 
	 * @param username
	 * @return user object with matching username, Null if no matching username
	 */
	public User getUserbyUsername(String username) {
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM User m WHERE m.username = ?0");
		q.setParameter(0, username);
		User u;
		try {
			u = (User) q.getSingleResult();
		} catch (NoResultException e) {
			// TODO Auto-generated catch block
			u = null;
		}
		HibernateUtil.closeSession();
		return u;
		
	}
	/**
	 * 
	 * @param id
	 * @return user object with matching user_id
	 */
	public User getUserById(int id) {
		Session ses = HibernateUtil.getSession();
		User u =ses.get(User.class, id);
		HibernateUtil.closeSession();
		return u;
	}
	
	/**
	 * 
	 * @param phone_number
	 * @return User object with matching phone number, Null if no matching phone number found
	 */
	public User getUserbyPhoneNumber(String phone_number) {
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM User m WHERE m.phone_number = ?0");
		q.setParameter(0, phone_number);
		//List<User> u = q.getResultList();
		User u;
		try {
			u = (User) q.getSingleResult();
		} catch (NoResultException e) {
			// TODO Auto-generated catch block
			u = null;
		}
		HibernateUtil.closeSession();
		return u;
	}
}
//code for testing please ignore
/* 
 * UserDao ud = new UserDao();
		ud.createUser(new User("u","p","0"));
		ChatDao cd = new ChatDao();
		cd.createChat(new Chat("test"));
		MemberDao md = new MemberDao();
		Member m = md.createMember(new Member("10", ud.getUserbyUsername("u"),cd.getChatByName("test")));
		System.out.println(md.getMemberbyUserAndChat(ud.getUserbyUsername("u"),cd.getChatByName("test")));
 * */
