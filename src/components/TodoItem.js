import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/toolkitSlice";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(
      deleteTodo({
        id: props.id,
      })
    );
  };

  return (
    <li className='task-item'>
      <div>{props.title}</div>
      <div>
        <button
          className='remove-task-button'
          onClick={() => {
            removeTodo();
          }}
        >
          Delete
        </button>
      </div>
      <div>
        <button className='remove-task-button'>Edit</button>
      </div>
    </li>
  );
};

export default TodoItem;
