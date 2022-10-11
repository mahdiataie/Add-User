//import { useSlotProps } from "@mui/base";
import { Card, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
const Wrapper = styled(Card)`
  width: 450px;

  position: fixed;
  padding: 15px;
  top: 35vh;
  left: 50vw;
  transform: translate(-225px, 0px);
  z-index: 100;
  box-shadow: 50px;
`;

const Backd = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const StyledButton = styled(Button)``;

const Backdrop = (props) => {
  return <Backd onClick={props.onConfirm}></Backd>;
};
const ModalOverlay = (props) => {
  return (
    <Wrapper>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.massage}</p>
      </div>
      <footer>
        <StyledButton onClick={props.onConfirm}> Okay </StyledButton>
      </footer>
    </Wrapper>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          massage={props.massage}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
