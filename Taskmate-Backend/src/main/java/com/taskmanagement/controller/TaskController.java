package com.taskmanagement.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskmanagement.Entity.Tasks;
import com.taskmanagement.config.Jwtutilconfig;
import com.taskmanagement.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

	@Autowired
	private TaskService taskService; // Fixed variable name

	@Autowired
	Jwtutilconfig jwtToken;

	@PostMapping("/add")
	public ResponseEntity<?> createTask(@RequestHeader("Authorization") String token, @RequestBody Tasks task) {
		
		token = jwtToken.getUserFromToken(token);
		String email = null;
		if (token == null) {
			return new ResponseEntity<String>("Invalid Token", HttpStatus.FORBIDDEN);
		} else {
			email = token;
		}

		return taskService.createTask(task, email);
	}

	@GetMapping("/fetchAll")
	public ResponseEntity<?> getAllTasks(@RequestHeader("Authorization") String token) {
		token = jwtToken.getUserFromToken(token);
		String email = null;
		if (token == null) {
			return new ResponseEntity<String>("Invalid Token", HttpStatus.FORBIDDEN);
		} else {
			email = token;
		}
		return taskService.getAllTasks(email); // Corrected method call
	}
//
//	@GetMapping("/{id}")
//	public Tasks getTaskById(@PathVariable int id) {
//		return taskService.getTaskById(id); // Corrected method call
//	}

	@PutMapping("/{id}")
	public ResponseEntity<Map<String, Object>> updateTask(@PathVariable int id, @RequestBody Tasks taskDetails) {
		System.out.println("controller");
		return taskService.updateTask(id, taskDetails); // Corrected method call
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTask(@PathVariable int id) {
		return taskService.deleteTask(id); // Corrected method call
	}
}
