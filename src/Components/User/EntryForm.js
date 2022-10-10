import React, { useState } from "react";
import { Card, TextField, Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)``;
const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  top: 5vh;
  left: 50vw;
  transform: translate(-225px, 0px);
  padding: 20px;
  border: red;
  height: fit-content;
  width: 450px;
  background-color: white;
  margin-bottom: 30px;
`;

const EntryForm = (props) => {
  const [nameEntered, setNameEntered] = useState("");
  const [ageEntered, setAgeEntered] = useState("");


  const nameHandler = (event) => {
    setNameEntered(event.target.value);
  };

  const ageHandler = (event) => {
    setAgeEntered(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(ageEntered);

    const entryData = {
      name: nameEntered,
      age: ageEntered,
      id: Math.random().toString(),
    };
    props.onNewData(entryData);
    setAgeEntered("");
    setNameEntered("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Wrapper variant="outlined">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={nameEntered}
          onChange={nameHandler}
        />

        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          value={ageEntered}
          onChange={ageHandler}
        />
        <div>
          <StyledButton
            type="submit"
            variant="contained"
            disableElevation
            //onChange={entryHandler}
          >
            Submit
          </StyledButton>
        </div>
      </Wrapper>
    </form>
  );
};
export default EntryForm;
