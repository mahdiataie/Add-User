import React, { useState } from "react";
import { Card, TextField, Button } from "@mui/material";
import styled from "styled-components";
import ErrorModal from "../UI Material/ErrorModal";
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
  const [isValid, setIsValid] = useState(true);
  const [ageisValid, setAgeIsValid] = useState(true);
  const [isError, setIsError] = useState();

  const nameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setNameEntered(event.target.value);
  };
  const ageHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setAgeEntered(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(ageEntered);
    if (nameEntered.trim().length === 0 || ageEntered.trim().length === 0) {
      setIsValid(false);
      setAgeIsValid(false);
      setIsError({
        title: "Invalid Input!",
        message: "Please enter a valid name or age",
      });
      return;
    }
    if (+ageEntered < 1) {
      setAgeIsValid(false);
      setIsError({
        title: "Invalid Age!",
        message: "Please enter a valid age",
      });

      return;
    }

    const entryData = {
      name: nameEntered,
      age: ageEntered,
      id: Math.random().toString(),
    };
    props.onNewData(entryData);
    setAgeEntered("");
    setNameEntered("");
  };

    const errorHandler = () =>{
        setIsError(null);
    };

  return (
    <div>
      {isError && <ErrorModal
        title={isError.title}
        massage={isError.message}
        onConfirm={errorHandler}
      />}
      <form onSubmit={submitHandler}>
        <Wrapper variant="outlined">
          <TextField
            error={!isValid}
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={nameEntered}
            onChange={nameHandler}
          />

          <TextField
            error={!ageisValid}
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
            >
              Submit
            </StyledButton>
          </div>
        </Wrapper>
      </form>
    </div>
  );
};
export default EntryForm;
