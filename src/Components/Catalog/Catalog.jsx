import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Catalog({ imgUrl, id }) {
  const [showButton, setShowButton] = useState(false);

  const showBtn = () => {
    setShowButton(true);
  };

  const closeBtn = () => {
    setShowButton(false);
  };

  return (
    <Container onMouseOver={showBtn} onMouseOut={closeBtn}>
      <DivBlock>
        <StyledImg src={imgUrl} alt="hh" />

        {showButton && (
          <BlockDiv>
          <Link key={id} to={`/${id}`}>
            <ButtonStlyle style={{ color: "white" }}>Подробнее</ButtonStlyle>
          </Link>
          </BlockDiv>
        )}
      </DivBlock>
    </Container>
  );
}

export default Catalog;

const Container = styled("div")`
  display: block;
`;
const StyledImg = styled("img")`
  width: 300px;
  box-shadow: 5px 3px 4px 2px black;
  &:hover {
    -webkit-transform: translate(0px, -10px);
    -moz-transform: translate(0px, -10px);
    -o-transform: translate(0px, -10px);
    -ms-transform: translate(0px, -10px);
    transform: translate(0px, -10px);
    transition: 0.5s;
  }
`;

const DivBlock = styled("div")`
  display: flex;
  flex-direction: column;
`;

const ButtonStlyle = styled(Button)`
  color: white;
  text-decoration: none;
`;
const BlockDiv = styled("div")`
  display: flex;
  justify-content: center;
`