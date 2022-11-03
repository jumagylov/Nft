// import styled from "styled-components";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNftData } from "../../store/slice/render";
import Catalog from "../Catalog/Catalog";
import Header from "../Header/Header";

const card = 6;
function Render() {
  // const { id } = useParams();
  // console.log(id);
  const data = useSelector((store) => store.rend.items);
  console.log(data);
  const [nextCart, setNextCart] = useState(card);
  console.log(nextCart);
  const onCloseHandler = () => {
    setNextCart(card);
  };

  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNftData());
  }, []);

  const seeMoreHandler = () => {
    setNextCart(card + nextCart);
  };
  // const [showButton, setShowButton] = useState(false);
  // const showBtn = () => {
  //   setShowButton(true);
  // };
  // const closeBtn = () => {
  //   setShowButton(false);
  // };
  return (
    <Container>
      <Header />
      <BlockDiv>
        <Styledh2>NTFs Products</Styledh2>
        <StyledP>
          Explore on the world's best largest NFT marketplace with our beautiful
          NFT products. We want to be a part of your smile, success and future
          growth.{" "}
        </StyledP>
      </BlockDiv>
      <D>
        {data.slice(0, nextCart).map((i) => (
          <div>
            <BlockImg>
              <Catalog imgUrl={i.image_url} />
            </BlockImg>
          </div>
        ))}
      </D>
      {data.length > nextCart && (
        <div onClick={seeMoreHandler} style={{ color: "white" }}>
          <StyledButton>SEE MORE</StyledButton>
        </div>
      )}
      {nextCart > 12 && (
        <StyledButton onClick={onCloseHandler}>SVERNUT</StyledButton>
      )}
    </Container>
  );
}

export default Render;
const D = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0 0 15%;
`;

const StyledButton = styled("Button")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: none;
  color: white;
  padding-bottom: 20px;
`;

const BlockImg = styled.div`
  padding-top: 10px;
`;

const BlockDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
`;

const Container = styled.div`
  background: #161634;
`;
const Styledh2 = styled.h2`
  font-size: 36px;
  color: #f7f7f7 !important;
  font-weight: 700;
  word-spacing: 4px;
  letter-spacing: 0.5px;
`;
const StyledP = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 29px;
  color: #c6c6cf !important;
  width: 25%;
`;
// const StyledImg = styled("img")`
//   width: 300px;
//   box-shadow: 5px 3px 4px 2px black;
//   &:hover {
//     -webkit-transform: translate(0px, -10px);
//     -moz-transform: translate(0px, -10px);
//     -o-transform: translate(0px, -10px);
//     -ms-transform: translate(0px, -10px);
//     transform: translate(0px, -10px);
//     transition: 0.5s;
//   }
// `
