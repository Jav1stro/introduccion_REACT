import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalStyled = styled.div`
  background: rgba(0, 0, 0, 0.733);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Modal({ children }) {
  return createPortal(
    <ModalStyled>{children}</ModalStyled>,
    document.getElementById("modal")
  );
}
export { Modal };
