package com.taskmanagement.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.taskmanagement.Entity.Users;
import com.taskmanagement.config.AES;
import com.taskmanagement.config.jwtToken;
import com.taskmanagement.dao.UserDao;

@Service
public class UserService {

	@Autowired
	UserDao userDao;

	@Autowired
	jwtToken jwtToken;

	public ResponseEntity<Map<String, Object>> registerUser(Users user) {
		Users exUser = userDao.fetchByEmail(user.getEmail());
		Map<String, Object> responseBody = new HashMap<String, Object>();
		if (exUser != null) {
			responseBody.put("message", "Email already exist");
			responseBody.put("status", "failed");
			responseBody.put("code", HttpStatus.NOT_ACCEPTABLE.value());
			return new ResponseEntity<Map<String, Object>>(responseBody, HttpStatus.BAD_REQUEST);
		}

		user.setPassword(AES.encrypt(user.getPassword(), "123"));
		userDao.saveUser(user);
		responseBody.put("message", "Signup successfully");
		responseBody.put("status", "success");
		responseBody.put("code", HttpStatus.OK.value());
		return new ResponseEntity<Map<String, Object>>(responseBody, HttpStatus.OK);

	}

	public ResponseEntity<?> login(String email, String password) {
		Users existUser = userDao.fetchByEmail(email);
		Map<String, Object> responseBody = new HashMap<String, Object>();
		if (existUser == null) {
			responseBody.put("message", "No account with this email");
			responseBody.put("status", "failed");
			responseBody.put("code", HttpStatus.NOT_FOUND.value());
			return new ResponseEntity<Map<String, Object>>(responseBody, HttpStatus.BAD_REQUEST);
		}
		if (password.equals(AES.decrypt(existUser.getPassword(), "123"))) {
			String token = jwtToken.generateJWT(existUser);
			responseBody.put("message", "login successful");
			responseBody.put("status", "success");
			responseBody.put("code", HttpStatus.OK.value());
			responseBody.put("data", token);
			return new ResponseEntity<Map<String, Object>>(responseBody, HttpStatus.OK);
		} else {
			responseBody.put("message", "Incorrect password");
			responseBody.put("status", "failed");
			responseBody.put("code", HttpStatus.BAD_REQUEST.value());
			return new ResponseEntity<Map<String, Object>>(responseBody, HttpStatus.BAD_REQUEST);
		}
	}

	public ResponseEntity<?> fetchUserByEmail(String email) {
		Users user = userDao.fetchByEmail(email);
		if (user == null) {
			return new ResponseEntity<String>("User Not Found", HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Object>(user, HttpStatus.OK);
	}
}
