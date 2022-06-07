import React from 'react'
import styled from 'styled-components'

export const ButtonStyled = styled.button `
    margin:10px;
    background:transparent;
    font-size:30px;
    border: none;
    padding:10px;
`

export function TodoButton(props) {

  const onClickButton = (msg) =>{
    console.log(msg);
  }


  return (
    <ButtonStyled
    onClick={()=>onClickButton('click!!')} >
      {props.children}
    </ButtonStyled>
  )
}

