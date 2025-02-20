package com.taskmanagement.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.taskmanagement.Entity.Tasks;
import com.taskmanagement.Entity.Users;
import com.taskmanagement.dao.TaskDao;
import com.taskmanagement.dao.UserDao;

@Service
public class TaskService {

	@Autowired
	TaskDao taskDao;

	@Autowired
	UserDao userDao;

	public ResponseEntity<?> createTask(Tasks task, String email) {
		Users user = userDao.fetchByEmail(email);
		if (user == null) {
			return new ResponseEntity<String>("User not found, please login", HttpStatus.FORBIDDEN);
		}
		task.setUser(user);
		taskDao.saveTask(task);
		Map<String, Object> responseBody = new HashMap<>();
		responseBody.put("status", "success");
		responseBody.put("message", "task added successfully");
		responseBody.put("code", HttpStatus.CREATED.value());

		return new ResponseEntity<>(responseBody, HttpStatus.CREATED);
	}

	public ResponseEntity<?> getAllTasks(String email) {

		Users user = userDao.fetchByEmail(email);

		if (user == null) {
			return new ResponseEntity<String>("User not found, please login", HttpStatus.FORBIDDEN);
		}

		List<Tasks> tasks = user.getTasks();

		if (tasks == null || tasks.isEmpty()) {
			return new ResponseEntity<String>("No tasks found for this user", HttpStatus.OK);
		}

		List<Tasks> taskDTOs = tasks.stream().map(task -> {
			Tasks dto = new Tasks();
			dto.setId(task.getId());
			dto.setTaskName(task.getTaskName());
			dto.setType(task.getType());
			dto.setStatus(task.getStatus());
			dto.setDescription(task.getDescription());
			return dto;
		}).collect(Collectors.toList());

		return new ResponseEntity<List<Tasks>>(taskDTOs, HttpStatus.OK);
	}

	public ResponseEntity<Map<String, Object>> updateTask(int taskId, Tasks updatedTask) {
		System.out.println("service");
		Optional<Tasks> existingTaskOptional = taskDao.findById(taskId);

		if (existingTaskOptional.isPresent()) {
			Tasks existingTask = existingTaskOptional.get();
			existingTask.setTaskName(updatedTask.getTaskName());
			existingTask.setType(updatedTask.getType());
			existingTask.setStatus(updatedTask.getStatus());
			existingTask.setDescription(updatedTask.getDescription());

			taskDao.saveTask(existingTask);
			
			Tasks taskDTO = new Tasks();
			taskDTO.setId(existingTask.getId());
			taskDTO.setTaskName(existingTask.getTaskName());
			taskDTO.setType(existingTask.getType());
			taskDTO.setStatus(existingTask.getStatus());
			taskDTO.setDescription(existingTask.getDescription());

			Map<String, Object> map = new HashMap<String, Object>();
			map.put("message", "Task Modified successfully");
			map.put("status", "success");
			map.put("data", taskDTO);
			return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
		} else {
			throw new RuntimeException("Task not found with ID: " + taskId);
		}
	}

	public ResponseEntity<String> deleteTask(int taskId) {
		taskDao.delete(taskId);
		return new ResponseEntity<String>("Task deleted successfully", HttpStatus.OK);
	}
}
