import { refType } from "@mui/utils";
import React, {useState} from "react";
import { Card, TextField, Button } from "@mui/material";
import styled from "styled-components";
import EntryForm from "./EntryForm";



const DataEntry = (props) => {
    //const [enteredData, setEnteredDate] = useState('');
    const newEntryHandler = (enteredNewData) => {
        const entryData  = {
            ...enteredNewData,
            entryData
        }
    };

    
  return (
    
    <EntryForm onNewEntry={newEntryHandler}/>
  );
};
export default DataEntry;
