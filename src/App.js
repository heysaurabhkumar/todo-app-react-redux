import "./styles.css";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const taskList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: task
    });
  };

  const handleDelete = (index) => {
    dispatch({
      type: "DELETE_TASK",
      payload: index
    });
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <h2>Using react and redux</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />{" "}
        <button type="submit">Add Task</button>
      </form>
      <br />
      <br />
      <h2>Task List</h2>
      {taskList.map((item, index) => (
        <div key={index}>
          <br />
          {item}{" "}
          <button type="button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
