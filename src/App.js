
import "./App.css";
import styled from "styled-components";
import React, { useState } from "react";
import EnteredData from "./Components/User/EnteredData";
import EntryForm from "./Components/User/EntryForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DUMMYDATA = [
  {
    name: "Martin",
    age: "24",
    key: "f1",
  },
  { name: "Sebasrian", age: "23", key: "f2" },
  { name: "Fabian", age: "42", key: "f3" },
];

function App() {
  const [newData, setNewData] = useState(DUMMYDATA);

  const newDataHandler = (data) => {
    setNewData((prevData) => {
      return [data, ...prevData];
    });
  };

  return (
    <Wrapper>
      <EntryForm onNewData={newDataHandler} />
      <EnteredData item={newData} />
    </Wrapper>
  );
}

export default App;
