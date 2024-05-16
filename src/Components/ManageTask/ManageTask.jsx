import { SettingsSystemDaydreamRounded } from "@mui/icons-material";

import {
  Box,
  Button,
  Dialog,
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
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  return (
    <div>
      <Dialog onClose={handleCloseDialog} open={openDialog}>
        <DialogTitle>{id ? "Edit" : "Add"} Task Form</DialogTitle>
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
      </Dialog>

      <div className="row">
        <Typography variant="h4">Task List</Typography>
        <div>
          <Button variant="contained" onClick={handleOpenDialog}>
            Add Task
          </Button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell align="right">Priority</TableCell>
              <TableCell align="right">Progress</TableCell>
              <TableCell align="right">Actions</TableCell>
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
                <TableCell align="right">{row.priority}</TableCell>
                <TableCell align="right">{row.progress}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={(e) => {
                      handleEdit(row.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={(e) => {
                      handleDelete(row.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ManageTask;
