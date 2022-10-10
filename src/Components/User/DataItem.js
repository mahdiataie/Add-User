import React from "react";
import styled from "styled-components";
import { Card, Typography } from "@mui/material";

const Wrapper = styled(Card)`
  width: 450px;
  position: relative;
  padding: 15px;
`;

const DataItem = (props) => {
  return (
    <Wrapper>
      <Typography>
        Name:{props.name}, Age:{props.age}
      </Typography>
    </Wrapper>
  );
};
export default DataItem;
