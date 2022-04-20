import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";


const TodoList = () => {
  const todos = useSelector((state) => {
    return state.tasks.todos;
  });

  return (
    <ul className='list-group'>
      {todos === undefined ? (
        null
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.name} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
