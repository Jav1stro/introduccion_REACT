import React from 'react';
// import  { useState } from 'react';
import styled from 'styled-components'


export const InputStyled= styled.input`
background: transparent;
color: #ff0022;

`

export function TodoSearch({ searchValue, setSearchValue }) {
  // const [] = useState('Búsqueda'); 
  
  const onSearchValueChange= (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return [
        <InputStyled  placeholder="Cebolla..."
        value ={searchValue}
        onChange={onSearchValueChange} />

        , <p>{searchValue}</p>
      ]
}

