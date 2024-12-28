"use client"
import React, { useState } from "react";

const Addtodo = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task) {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
      ></input>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Addtodo;
