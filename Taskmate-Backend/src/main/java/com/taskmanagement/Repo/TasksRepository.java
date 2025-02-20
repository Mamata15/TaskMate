package com.taskmanagement.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.taskmanagement.Entity.Tasks;

@Repository
public interface TasksRepository extends JpaRepository<Tasks, Integer> {
	List<Tasks> findByUserId(int userId);
}
