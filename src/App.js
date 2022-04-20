import React from "react";
import TodoNew from "./components/TodoNew";
import TodoList from "./components/TodoList";
import "./App.css";
import { useSelector } from "react-redux";
import Card from "./UI/Card";

const App = () => {
  let counter = useSelector((state) => {
    if (state.tasks.todos === undefined) {
      return;
    } else {
      return state.tasks.todos.length;
    }
  });
  return (
    <div className='App'>
      <Card style={{margin: "10px"}}>
        <h3>Todos {counter}</h3>
        <TodoNew />
        <TodoList />
      </Card>
    </div>
  );
};

export default App;
