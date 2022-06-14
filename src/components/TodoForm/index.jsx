import React from "react";
import { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext";
import styled from "styled-components";

const FormContainer = styled.form`
  background-color: #04ff1996;
  box-shadow: 0px 0px 50px 15px #f8566bad;
  border: 1px solid #ff0022;
  height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;

const FormTitle = styled.h1`
  color: #ff0022;
  text-decoration: underline rgba(255, 0, 0, 0.418);
`;

const FormTextarea= styled.textarea`
    background-color: black;
    color:#ff0022;
    border: 1px solid #ff0022;
    margin:auto;
    height:100px;
`
const ButtonsDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
`
function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //para que no se recarge la pág
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormTitle>Nuevo Todo</FormTitle>
      <FormTextarea
        placeholder="nueva tarea"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <ButtonsDiv>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </ButtonsDiv>
    </FormContainer>
  );
}

export { TodoForm };
