import React from 'react';
import {createContext} from 'react';
import  { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider (props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      }= useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const [ openModal, setOpenModal] = useState(false);

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
    saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      id: 4,
      completed: false,
      text: text,
    })
    console.log(newTodos)
    saveTodos(newTodos);
  };
  
  const unCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = false;
    console.log(newTodos)
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

    return (

    <TodoContext.Provider value={{
        loading,
        error,  
        totalTodos, 
        completedTodos,
        searchValue,   
        setSearchValue,
        searchedTodos,   
        completeTodo,
        addTodo,
        unCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal
    }}>
        {props.children}
    </TodoContext.Provider>   

    );
}

export { TodoContext, TodoProvider }; 

