package com.revature.daos;

import com.revature.models.User;
import com.revature.utils.HibernateUtil;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import java.util.List;

public class UserDao {
	public void createUser(User user) {
		Session ses = HibernateUtil.getSession();
		ses.save(user);
		HibernateUtil.closeSession();
	}
	
	//ben hasnt gone over how to do this so i looked this up
	//this might not work
	public User getUserbyUsername(String username) {
		Session ses = HibernateUtil.getSession();
		Criteria crit = ses.createCriteria(User.class);
		crit.add(Restrictions.eq("username",username));
		List<User> u = crit.list();
		HibernateUtil.closeSession();
		return u.get(0);
		
		
	}
	
	public User getUserById(int id) {
		Session ses = HibernateUtil.getSession();
		User u =ses.get(User.class, id);
		HibernateUtil.closeSession();
		return u;
	}
}
