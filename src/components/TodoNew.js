import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/toolkitSlice";

const TodoNew = () => {
  const [value, setValue] = useState("");
  
  const dispatch = useDispatch();
  const [ifEmpty, setIfEmpty] = useState("")
  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
     setIfEmpty("Input is empty, write task to add")
      return;
    }

    dispatch(
      addTodo({
        task: value,
      })
    );
    setValue("");
    setIfEmpty("")
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type='text'
          className='form-control'
          placeholder='Add task'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button 
        className="btn btn-outline-primary"
        onClick={onSubmit}
        >Save</button>
      </div>
      <p>{ifEmpty}</p>
    </div>
  );
};

export default TodoNew;
