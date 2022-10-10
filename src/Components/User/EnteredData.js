import React from "react";
import { Card, Typography } from "@mui/material";
import styled from "styled-components";
import DataItem from "./DataItem";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

width:450px;
position: relative;
left: 50vw;
transform: translate(-225px, 0px);
`;
const EnteredData = (props) => {


return <Wrapper >
{props.item.map((data,index) => (
    <DataItem
    key={index}
    name={data.name}
    age={data.age}/>
))}
</Wrapper>


};

export default EnteredData;

