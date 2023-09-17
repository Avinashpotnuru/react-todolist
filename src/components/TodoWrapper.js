import React, { useEffect, useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

import {
  useGetTodosQuery,
  useAddTodoMutation,
  useEditTodosMutation,
  useDeleteTodosMutation,
} from "../store/api/restApis";

import axios from "axios";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const [id, setEditId] = useState("");

  const { data } = useGetTodosQuery();

  const [addTodoData] = useAddTodoMutation();

  const [deleteTodoItem] = useDeleteTodosMutation();

  const [editTodoData] = useEditTodosMutation();

  // const [editCheck] = us;

  console.log(id);

  const addTodo = (todo) => {
    addTodoData({ title: todo });
  };

  const deleteTodo = (item) => {
    // console.log(item);
    deleteTodoItem(item);
  };

  const toggleComplete = (completed, id) => {
    editTodoData({ id, completed: true });
    console.log(completed, id);
  };

  const editTodo = (id) => {
    setEditId(id);
  };

  const editTask = (task) => {
    console.log(task);
    editTodoData({ id, task });
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />

      {data
        ?.slice(0, 20)
        .map((todo, idx) =>
          todo?.id === id ? (
            <EditTodoForm editTodo={editTask} task={todo?.title} id={id} />
          ) : (
            <Todo
              key={idx}
              id={todo.id}
              task={todo?.title}
              completed={todo?.completed}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
    </div>
  );
};
