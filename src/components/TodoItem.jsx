import React from 'react'
import styled from 'styled-components'
import { TodoButton } from './TodoButton'
import './TodoItem.css';
// import {  useState  } from 'react'

export const Absolute = styled.section`
border: 1px solid  #ff0022;
margin:auto;
width:30%;
background-color: #f8566bad;
text-align: center;
color:black;
box-shadow: 0px 0px 50px 15px #04ff19eb;
`


export function TodoItem(props) {
  // const [stateCompleted, setStateCompleted] =useState('');

const onComplete = ()=>{
  console.log('ToDo completed!! ');
}
const onDelete = ()=>{
  console.log('ToDo deleted!! ');
}

  return (
    <div>
        <h2>TODO Nº {props.id +1}</h2>
        <Absolute>
        <h4>Tarea:</h4>
        <p className={`${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
        </p>
        
        <TodoButton className={` ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}>
        ✅
        </TodoButton>
        <TodoButton
        className="Icon-delete"
        onClick={onDelete}
      >
        ❎
      </TodoButton>
        </Absolute>
    </div>
  )
}

