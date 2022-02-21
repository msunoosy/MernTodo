import React from "react";
import "./Todolist.css";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

function Todolist(props){
const todolist = props.todoList.map((task, index) => {
  const taskComplete = (task) => {
    axios
      .put(`http://localhost:3001/api/tasks/${task._id}`, {
        _id: task._id,
        todo: task.todo,
        isComplete: !task.isComplete,
      })
      .then((res) => props.taskComplete(res.data))
      .catch((err) => console.log(err));
  };

  const removeTask = (id) => {
    axios
      .delete(`http://localhost:3001/api/tasks/${id}`)
      .then((res) => props.removeTask(res.data))
      .catch((err) => console.log(err));
  };

  
    return (
      <li key={index}>
        <div style={{ display: "flex" }}>
          <CheckIcon className={task.isComplete ? "isComplete" : "checkicon"} />
          <p
            className={task.isComplete ? "taskcomplete" : ""}
            onClick={() => {
              taskComplete(task);
            }}
          >
            {task.todo}{" "}
          </p>
        </div>
        <div>
          <EditIcon
            className="edit"
            onClick={() => {
              props.tasktoUpdate(task);
              console.log('edit clicked')

              
              props.showPopup();
            
            }}
          />
          <CloseIcon className="close" onClick={() => removeTask(task._id)} />
        </div>
      </li>
    );
  });
  return (
    <div className="tasklist">
      <ul>{todolist}</ul>
    </div>
  );
}

export default Todolist;
