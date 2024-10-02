import { useState } from 'react';
import './App.css';
import TodoItem from './components/todo-item';
import TodoForm from './components/todo-form';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos{newTodos};

  }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <div>
      {todos.map((item, index) => {
        return <TodoItem  value={item} key={index} />
      })}
      </div>
     
    </div>
  );
}

export default App;
