create table contact (
	contact_id serial primary key,
	pass_code varchar (60),
	first_name varchar(30),
	last_name varchar(30),
	user_bio varchar(150),
	profile_photo bytea,
	phone_number char(10)
);


create table chat (
	chat_id serial primary key,
	chat_name text
);


create table message (
	message_id serial primary key,
	from_number int,
	message_text text,
	sent_datetime timestamp,
	chat_id_fk int references chat(chat_id)
);


create table group_member (
	contact_id int references contact(contact_id),
	chat_id_fk int references chat(chat_id),
	joined_datetime timestamp,
	left_datetime timestamp
);


insert into contact (contact_id, first_name, last_name, profile_photo , phone_number)
values (default, 'You', 'Lin', null, '9177800968'),
		(default, 'Mark', 'Zuckerberg', null, '3150566666');
	
select * from contact;

--delete from contact where first_name = 'You';
--alter table contact drop column phone_number;
--alter table contact add phone_number varchar(10);
--update contact set phone_number = '3150566666' where contact_id = 2;

drop table contact, chat, group_member, message;