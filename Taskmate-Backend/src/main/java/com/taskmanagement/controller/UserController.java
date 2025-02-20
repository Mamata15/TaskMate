package com.taskmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.taskmanagement.Entity.Users;
import com.taskmanagement.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody Users user) {
		return userService.registerUser(user);
	}

	@GetMapping("/login")
	public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
		return userService.login(email, password);
	}

	@GetMapping("/user/{email}")
	public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
		return userService.fetchUserByEmail(email);
	}
	
}
