package com.taskmanagement.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Tasks {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String taskName;
	private String type;
	private String status;
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private Users user;
}
