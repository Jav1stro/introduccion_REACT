import {React, useContext} from 'react';
import styled from 'styled-components'
import {TodoContext} from '../../TodoContext';


const TitleStyled = styled.header`
  margin:0;
  padding:0;
  font-size:32px;
  font-weight:bold;
  margin-top:20px;
  padding:20px;
`

 function TodoCounter(){
  const { totalTodos, completedTodos} = useContext( TodoContext );

  return (
    <TitleStyled>
    ¡Has completado {completedTodos} de {totalTodos} TODOs!
    </TitleStyled>
  )
}

export { TodoCounter }

