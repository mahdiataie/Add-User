//import logo from './logo.svg';
import "./App.css";
//import Button from "@mui/material/Button";
import styled from "styled-components";
import React, {useState} from "react";
import EnteredData from "./Components/User/EnteredData";
import DataEntry from "./Components/User/DataEntry";
import { Card } from "@mui/material";
import EntryForm from "./Components/User/EntryForm";

// padding: 30px 80px ;
//padding-left: 20px;`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
  `;

const DUMMYDATA =[{
  name: 'Martin', age: '24', key: 'f1'},
  {name: 'Sebasrian', age:'23', key: 'f2'},
  {name: 'Fabian', age: '42', key: 'f3'}
];

function App() {
  const [newData, setNewData] = useState(DUMMYDATA);

  const newDataHandler = data =>{
    setNewData((prevData)=>{
      return [data, ...prevData];
    }
    )
  };

  return (
    <Wrapper>
    <EntryForm onNewData={newDataHandler}/>
    <EnteredData item={newData}/>
    </Wrapper>
  );
}

export default App;
