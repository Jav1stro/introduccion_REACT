import styled from "styled-components";

const CreateTodoButtonStyled = styled.div`
  position: fixed;
  top: 10%;
  left: 10%;
  color: black;
  width: 100px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #04ff1996;
  box-shadow: 0px 0px 50px 15px #f8566bad;
  border: 1px solid #ff0022;
  z-index: 1;
  &:hover {
    background-color: #f8566bad;
    box-shadow: 0px 0px 50px 15px #04ff1996;
    border: 1px solid #ff0022;
    color: #04ff1996;
  }
`;

function CreateTodoButton(props) {
    let textButton = "";
    if (props.openModal) {
        textButton = "Cerrar";
      } else {
        textButton = "Nuevo Todo";
      }
  const onClickButton = () => {
    props.setOpenModal(prevState=> !prevState);
  };
  return (
    <CreateTodoButtonStyled onClick={onClickButton}>
      {textButton}
    </CreateTodoButtonStyled>
  );
}
export { CreateTodoButton };
