package com.revature.daos;

import com.revature.models.User;
import com.revature.utils.HibernateUtil;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import java.util.List;

import javax.persistence.Query;

public class UserDao {
	/**
	 * Adds given user to the users table
	 * */
	public void createUser(User user) {
		Session ses = HibernateUtil.getSession();
		ses.save(user);
		HibernateUtil.closeSession();
		System.out.println("-- "+user+" added to database");
	}
	
	/**
	 * 
	 * @param username
	 * @return user object with matching username
	 */
	public User getUserbyUsername(String username) {
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM User m WHERE m.username = ?0");
		q.setParameter(0, username);
		List<User> u = q.getResultList();
		HibernateUtil.closeSession();
		return u.get(0);
		
		
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
}
