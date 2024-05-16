import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./ManageTask.css";

const ManageTask = () => {
  const [id, setId] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const [name, setName] = useState();
  const [priority, setPriority] = useState("low");
  const [progress, setProgress] = useState("todo");
  const [tasks, setTasks] = useState([
    { id: 1, name: "Go to gym", priority: "high", progress: "todo" },
    { id: 2, name: "Read a book", priority: "low", progress: "done" },
  ]);
  let editObj;

  const handleTask = () => {
    if(!name){
      alert("Task name is required");
      return false;
    }
    if (id) {
      let newList = tasks.map((item) => {
        return item.id == id
          ? { id: id, name: name, priority: priority, progress: progress }
          : item;
      });
      setTasks(newList);
    } else {
      if (tasks.length >= 5) {
        alert("You cant add more than 5 tasks");
        handleCloseDialog();
        return;
      }
      const id = Math.random(9, 999);
      setId(id);
      let taskObj = {
        id: id,
        name: name,
        priority: priority,
        progress: progress,
      };
      let copyTasks = [...tasks];
      copyTasks.push(taskObj);
      setTasks(copyTasks);
    }
    handleCloseDialog();
    resetForm();
  };

  const resetForm = () => {
    setId("");
    setName("");
    setPriority("low");
    setProgress("todo");
  };

  const handleEdit = (id) => {
    editObj = tasks.find((item) => {
      return item.id == id;
    });
    setId(editObj.id);
    setName(editObj.name);
    setPriority(editObj.priority);
    setProgress(editObj.progress);
    handleOpenDialog();
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure, Do you want to delete?")) {
      let newtasks = tasks.filter((item) => {
        return item.id != id;
      });
      setTasks(newtasks);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenAdd = () => {
    resetForm();
    handleOpenDialog();
  }

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const renderTaskForm = () => {
    return (<Dialog onClose={handleCloseDialog} open={openDialog}>
      <DialogTitle>{id ? "Edit" : "Add"} Task Form</DialogTitle>
      <DialogContent>
      <div className="add-task__wrapper">
        <div className="add-task__field">
          <TextField
            fullWidth
            id="taskname"
            label="Task Name"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="add-task__field">
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="priority-native">
              Priority
            </InputLabel>

            <NativeSelect
              value={priority}
              label="Priority"
              inputProps={{
                name: "priority",
                id: "priority-native",
              }}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className="add-task__field">
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="progress-native">
              Progress
            </InputLabel>

            <NativeSelect
              value={progress}
              label="progress"
              inputProps={{
                name: "progress",
                id: "progress-native",
              }}
              onChange={(e) => {
                setProgress(e.target.value);
              }}
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className="add-task__field">
          <Button variant="contained" onClick={handleTask}>
            Submit
          </Button>
        </div>
      </div>
      </DialogContent>
    </Dialog>)
  }

  const renderTaskList = () => {
    return (<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell align="left">Priority</TableCell>
            <TableCell align="left">Progress</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.priority}</TableCell>
              <TableCell align="left">{row.progress}</TableCell>
              <TableCell align="left">
                <div className="task-list__actions">
                <Button
                variant="outlined"
                  onClick={(e) => {
                    handleEdit(row.id);
                  }}
                >
                  Edit
                </Button>
                <Button
                 variant="outlined"
                  onClick={(e) => {
                    handleDelete(row.id);
                  }}
                >
                  Delete
                </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
  }
  return (
    <div class="task">
      {renderTaskForm()}

      <div className="task-list__header">
        <Typography variant="h4">Task List</Typography>
        <Button variant="contained" onClick={handleOpenAdd}>
          Add Task
        </Button>
      </div>

      {renderTaskList()}

      
    </div>
  );
};
export default ManageTask;
