import React from 'react';
import TodoNew from './components/TodoNew';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className="app">
			<h1 className="app-title">Todos (counter)</h1>
			<TodoNew/>
			<TodoList/>
		</div>
	);
};

export default App;