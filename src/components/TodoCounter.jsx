import React from 'react'
import styled from 'styled-components'

const TitleStyled = styled.header`
  margin:0;
  padding:0;
`

export function TodoCounter(props){
  return (
    <TitleStyled>
    <h1>Has completado {props.completed} de {props.total} TODOs</h1>
    </TitleStyled>
  )
}

