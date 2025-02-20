package com.taskmanagement.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.taskmanagement.Entity.Users;
import com.taskmanagement.Repo.UserRepository;

@Component
public class UserDao {

	@Autowired
	UserRepository repository;

	public Users fetchByEmail(String email) {
		return repository.findByEmail(email);
	}

	public void saveUser(Users user) {
		repository.save(user);

	}
}
