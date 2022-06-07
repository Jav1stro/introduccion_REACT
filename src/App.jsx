
// import './App.css';
import  { useState } from 'react';

import { TodoCounter } from './components/TodoCounter'
import { TodoItem } from './components/TodoItem'
// import { TodoButton } from './components/TodoButton'
import { TodoList } from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import { Container } from './components/Container'
import {TodoContainer} from './components/TodoContainer'

const defaultTodos =[
  {
    id: 0,
    text: "cortar cebolla",
    completed: false
  },
  {
    id: 1,
    text: "cortar pepino",
    completed: true
  },
  {id:2,
    text: "cortar papa",
    completed: false
  },
  {
    id:3,
    text: 'amar a mi pipina',
    completed: true
  },
  {
    id:4,
    text: 'irse a la B',
    completed: true
  }
]


function App() {
  
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    console.log(newTodos)
    setTodos(newTodos);
  };
  
  const unCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = false;
    console.log(newTodos)
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
      
      <Container>
         <TodoCounter completed={completedTodos} total={totalTodos}/>
        <TodoSearch  searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoContainer>
        <TodoList>
        {searchedTodos.map(todo=>(
          <TodoItem 
          id={todo.id} 
          text ={todo.text}
          completed={todo.completed}
          onComplete={()=> completeTodo(todo.text)}
          unComplete={()=> unCompleteTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
           />
        ))}
        </TodoList>
        </TodoContainer>
        </Container>
      
  );
}

export default App;
