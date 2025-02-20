import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Stack,
  Avatar,
  Popover,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import FilterPanel from "../components/JSX/FilterPanel";
import TaskTable from "../components/JSX/TaskTable";

const API_URL = "http://localhost:8080/api";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({ name: "Guest", email: "guest@example.com", profilePic: "" });

  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [searchName, setSearchName] = useState("");
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [task, setTask] = useState({
    taskName: "",
    type: "",
    status: "",
    description: "",
  });

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null);


  const [anchorEl, setAnchorEl] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchTasks();
  }, []);


  const fetchTasks = async () => {
    setLoading(true);
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.get(`${API_URL}/tasks/fetchAll`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status === 200) {
        setTasks(response.data || []);
      } else {
        console.error("Failed to fetch tasks:", response);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

 
  const handleLogout = () => {
    navigate("/");
  };


  const handleMouseEnter = (event) => setAnchorEl(event.currentTarget);
  const handleMouseLeave = () => setAnchorEl(null);


  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  const handleProfilePicUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, profilePic: imageUrl });
    }
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


  const handleFilterTypeChange = (type) => setFilterType(type);
  const handleFilterStatusChange = (status) => setFilterStatus(status);
  const handleSearchNameChange = (name) => setSearchName(name);
  const handleClearFilters = () => {
    setFilterType("");
    setFilterStatus("");
    setSearchName("");
  };


  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
    setTask({ taskName: "", type: "", status: "", description: "" });
  };


  const handleAddTaskChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };
  const handleAddTask = async () => {
    try {
      const token = sessionStorage.getItem("token");

      const response = await axios.post(
        `${API_URL}/tasks/add`,
        {
          taskName: task.taskName,
          type: task.type,
          status: task.status,
          description: task.description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Task added successfully!");
        console.log("added");
        handleCloseAddDialog();
        fetchTasks();
      } else {
        alert(response.data.message || "Failed to add task");
      }
    } catch (error) {
      console.error("Error adding task:", error);
      alert(error.response?.data?.message || "Error adding task");
    }
  };


  const handleOpenEditDialog = (task) => {
    setEditTaskData(task);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setEditTaskData(null);
  };


  const handleEditTaskChange = (e) => {
    const { name, value } = e.target;
    setEditTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEditedTask = async () => {
    const token = sessionStorage.getItem("token")

    if (!editTaskData) return;
    try {
      const response = await axios.put(
        `${API_URL}/tasks/${editTaskData.id}`,
        editTaskData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200) {
        alert("Task updated successfully!");
        await fetchTasks(); 
        handleCloseEditDialog();
      } else {
        alert("Failed to update task");
      }
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Error updating task");
    }
  };  


  const handleDeleteTask = async (taskId) => {
    const token = sessionStorage.getItem("token")

    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Task deleted successfully!");
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Error deleting task");
    }
  };

  const filteredTasks = Array.isArray(tasks) ? tasks.filter((t) => {
    if (filterType && t.type !== filterType) return false;
    if (filterStatus && t.status !== filterStatus) return false;
    if (searchName && !t.taskName.toLowerCase().includes(searchName.toLowerCase())) return false;
    return true;
}) : [];



  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleProfilePicUpload}
      />

      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff" }}>
              TaskMate
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#fff", fontStyle: "italic", display: "block" }}
            >
              friendly companion to manage your tasks
            </Typography>
          </Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Avatar
                onClick={handleAvatarClick}
                sx={{
                  bgcolor: "#fff",
                  color: "#3f51b5",
                  width: 40,
                  height: 40,
                  cursor: "pointer",
                }}
                src={user.profilePic}
              >
                {!user.profilePic && <AccountCircleIcon />}
              </Avatar>
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleMouseLeave}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Paper sx={{ textAlign: "center", padding: 2, minWidth: 200 }}>
                  <Avatar
                    sx={{
                      bgcolor: "#3f51b5",
                      margin: "auto",
                      mb: 0,
                      textTransform: "uppercase",
                      width: 60,
                      height: 60,
                    }}
                    src={user.profilePic}
                  >
                    {!user.profilePic &&
                      (user.name ? user.name.charAt(0).toUpperCase() : "U")}
                  </Avatar>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {user.email}
                  </Typography>
                </Paper>
              </Popover>
            </Box>
            <Button
              variant="contained"
              color="error"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
              
            </Button>
            
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        sx={{ mt: 3, mx: "auto", width: "95%", maxWidth: "1200px", flexGrow: 1 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mb: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Filter
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleOpenAddDialog}
          >
            Add Task
          </Button>
        </Paper>

        <FilterPanel
          filterType={filterType}
          filterStatus={filterStatus}
          searchName={searchName}
          onFilterTypeChange={handleFilterTypeChange}
          onFilterStatusChange={handleFilterStatusChange}
          onSearchNameChange={handleSearchNameChange}
          onClearFilters={handleClearFilters}
        />

        {/* {loading ? (
          <Typography sx={{ mt: 2 }}>Loading tasks...</Typography>
        ) : (
          <TaskTable
            tasks={tasks}
            onEdit={(task) => console.log("Edit task", task)}
            onDelete={(id) => console.log("Delete task with ID:", id)}
          />
        )} */}

        <Typography
          variant="body2"
          sx={{ mt: 1, color: "#666", fontStyle: "italic" }}
        >
          List of Tasks
        </Typography>
        
        <TaskTable tasks={filteredTasks} onEdit={handleOpenEditDialog} onDelete={handleDeleteTask} />

      </Box>

      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              value={task.type}
              label="Type"
              onChange={handleAddTaskChange}
            >
              <MenuItem value="">Select Type</MenuItem>
              <MenuItem value="normal">Normal</MenuItem>
              <MenuItem value="urgent">Urgent</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={task.status}
              label="Status"
              onChange={handleAddTaskChange}
            >
              <MenuItem value="">Select Status</MenuItem>
              <MenuItem value="inprogress">In Progress</MenuItem>
              <MenuItem value="done">Done</MenuItem>
            </Select>
          </FormControl>

          <TextField
            margin="dense"
            label="Name"
            name="taskName"
            fullWidth
            value={task.taskName}
            onChange={handleAddTaskChange}
            sx={{ mt: 2 }}
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            fullWidth
            multiline
            rows={3}
            value={task.description}
            onChange={handleAddTaskChange}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddTask} color="primary" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      

      {/* Edit Task Dialog */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Task</DialogTitle>
        
        <DialogContent>
          {editTaskData && (
            <>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel>Type</InputLabel>
                <Select name="type" value={editTaskData.type || ""} label="Type" onChange={handleEditTaskChange}>
                  <MenuItem value="normal">Normal</MenuItem>
                  <MenuItem value="urgent">Urgent</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Status</InputLabel>
                <Select name="status" value={editTaskData.status || ""} label="Status" onChange={handleEditTaskChange}>
                  <MenuItem value="inprogress">In Progress</MenuItem>
                  <MenuItem value="done">Done</MenuItem>
                </Select>
              </FormControl>
              <TextField margin="dense" label="Name" name="taskName" fullWidth value={editTaskData.taskName || ""} onChange={handleEditTaskChange} sx={{ mt: 2 }} />
              <TextField margin="dense" label="Description" name="description" fullWidth multiline rows={3} value={editTaskData.description || ""} onChange={handleEditTaskChange} sx={{ mt: 2 }} />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEditedTask} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Dashboard;
