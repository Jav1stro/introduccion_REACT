import React from 'react'
import styled from 'styled-components'

export const TodoContainerStyled = styled.div`

`

export function TodoContainer (props)  {
  return (
    <TodoContainerStyled>
        {props.children}
    </TodoContainerStyled>
  )
}
