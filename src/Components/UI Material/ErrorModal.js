import { useSlotProps } from "@mui/base";
import { Card, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

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

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const StyledButton = styled(Button)``;
const ErrorModal = (props) => {
  return (
    <Backdrop onClick={props.onConfirm}>
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
    </Backdrop>
  );
};

export default ErrorModal;
