import React from 'react'
import styled from 'styled-components'
import './TodoItem.css';

export const Absolute = styled.section`
border: 1px solid  #ff0022;
margin:auto;
width:30%;
background-color: #f8566bad;
text-align: center;
color:black;
box-shadow: 0px 0px 50px 15px #04ff19a4;
`
export const SpanStyled = styled.button`
border: none;
background-color: #04ff1936;
margin:5px;
`
export function TodoItem(props) {

  return (
    <div>
        <h2>TODO Nº {props.id +1}</h2>
        <Absolute>
        <h4 className='TodoItem-title'>Tarea</h4>
        <p className={`${props.completed && 'TodoItem-p--complete'} TodoItem-p`}>
        {props.text}
        </p>
        
        <SpanStyled className={` ${props.completed && 'Icon-check--active'} Icon-complete`}
        onClick={props.onComplete}>
        Complete
        </SpanStyled>
        <SpanStyled className={` ${props.completed && 'Icon-check--active'} Icon-uncomplete` }
        onClick={props.unComplete}>
        Uncomplete
        </SpanStyled>
        
        <SpanStyled
        className="Icon-delete"
        onClick={props.onDelete}
      >
        Errase
      </SpanStyled>
        </Absolute>
    </div>
  )
}

