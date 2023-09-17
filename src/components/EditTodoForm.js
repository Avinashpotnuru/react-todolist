import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();

    editTodo(value);

    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};