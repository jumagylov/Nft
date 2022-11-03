import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";

function Catalog({ imgUrl, id }) {
  const [showButton, setShowButton] = useState(false);
  // console.log(setNft);
  const navigate = useNavigate();
  const showBtn = () => {
    setShowButton(true);
  };
  // const { postId } = useParams();
  // console.log(postId);
  const closeBtn = () => {
    setShowButton(false);
  };
  const inerpage = () => {
    navigate(`/${id}`);
  };
  return (
    <Container onMouseOver={showBtn} onMouseOut={closeBtn}>
      <DivBlock>
        <StyledImg src={imgUrl} alt="hh" />
        <Link to={`/${id}`}>frefer</Link>
        {showButton && (
          <Button onClick={inerpage} style={{ color: "white" }}>
            Подробнее
          </Button>
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
