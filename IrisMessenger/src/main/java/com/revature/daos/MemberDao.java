package com.revature.daos;

import java.util.List;

import javax.persistence.NoResultException;
import javax.persistence.Query;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import com.revature.models.Chat;
import com.revature.models.Member;
import com.revature.models.User;
import com.revature.utils.HibernateUtil;

public class MemberDao {
	/** adds new object to the data base
	 * 
	 * 
	 * @param member
	 * @return object that you inserted to the database. (so you can get the id)
	 */
	public Member createMember(Member member) {
		Session ses = HibernateUtil.getSession();
		ses.save(member);
		HibernateUtil.closeSession();
		System.out.println("-- "+member+" added to database");
		return getMemberbyUserAndChat(member.getUser_fk(),member.getChat_fk());
	}
	/**
	 * 
	 * @param user
	 * @param chat
	 * @return member within current chat that is the current user
	 */
	public Member getMemberbyUserAndChat(User user, Chat chat) {
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM Member m WHERE m.user_fk = ?0 AND m.chat_fk = ?1");
		q.setParameter(0, user);
		q.setParameter(1, chat);
		Member u;
		try {
			u = (Member) q.getSingleResult();
		} catch (NoResultException e) {
			// TODO Auto-generated catch block
			u = null;
		}
		return u;
	}
	
	/**
	 * 
	 * @param user
	 * @param chat
	 * @return all members of a given chat that are not the current user.
	 */
	public List<Member> getMembersbyNotUserAndChat(User user, Chat chat) {
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM Member m WHERE m.user_fk != ?0 AND m.chat_fk = ?1");
		q.setParameter(0, user);
		q.setParameter(1, chat);
		List<Member> u = q.getResultList();
		return u;
	}
	
	/**
	 * 
	 * @param user
	 * @param chat
	 * @return all members within a given chat, with the member of the current user listed at the top.
	 */
	public List<Member> getMembersbyChat(User user, Chat chat){
		List<Member> l = getMembersbyNotUserAndChat(user,chat);
		l.add(0, getMemberbyUserAndChat(user,chat));
		return l;
	}
	
}
