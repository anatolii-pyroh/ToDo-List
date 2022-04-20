import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/toolkitSlice";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(
      deleteTodo({
        id: props.id,
      })
    );
  };
  const changeTodo = (taskName) => {
    if (!taskName) {
      return;
    } else {
      dispatch(
        editTodo({
          name: taskName,
          id: props.id,
        })
      );
    }
  };

  return (
    <li className='list-group-item'>
      <div className='input-group justify-content-between'>
        <div className='form-check mt-2'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />
          <label className='form-check-label' for='flexCheckDefault'>
            {props.title}
          </label>
        </div>
        <div>
          <button
            className='btn btn-outline-success'
            onClick={() => {
              changeTodo(prompt());
            }}
          >
            Edit
          </button>
          <button
            className='btn btn-outline-danger'
            onClick={() => {
              removeTodo();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
