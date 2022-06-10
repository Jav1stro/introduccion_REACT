import React from 'react'
import styled from 'styled-components'

const TitleStyled = styled.header`
  margin:0;
  padding:0;
  font-size:32px;
  font-weight:bold;
`

 function TodoCounter({ totalTodos, completedTodos }){
  return (
    <TitleStyled>
    Has completado {completedTodos} de {totalTodos} TODOs
    </TitleStyled>
  )
}

export { TodoCounter }

