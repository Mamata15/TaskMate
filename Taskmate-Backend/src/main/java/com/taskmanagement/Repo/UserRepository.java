package com.taskmanagement.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.taskmanagement.Entity.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
	
	public Users findByEmail(String email);
	

}
