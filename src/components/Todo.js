import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// deleteTodo, editTodo, id

export const Todo = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
  id,
  completed,
}) => {
  // console.log(completed);

  const [value, setValue] = useState(false);

  const handleChange = (e) => {
    setValue((prev) => !prev);
    toggleComplete(completed, id);
  };

  return (
    <div key={id} className="Todo">
      <input type="checkbox" value={value} onChange={handleChange} />
      <p className={`${value ? "completed" : ""}`}>{task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};
