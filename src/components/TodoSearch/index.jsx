import {React, useContext} from 'react';
import {TodoContext} from '../../TodoContext';
import styled from 'styled-components'



export const InputStyled= styled.input`
background: transparent;
color: #ff0022;

`

export function TodoSearch() {
  
  const {searchValue, setSearchValue}  = useContext(TodoContext);

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

