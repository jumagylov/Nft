import styled from "@emotion/styled";
import React from "react";

function Header() {
  return (
    <Container>
        <BlockCont>
      <BlockDiv>
        <div>
          <StyledH1>Открывайте, собирайте и продавайте необычные NFT</StyledH1>
        </div>
      </BlockDiv>
      <BlockP>
        <StyledP>
          NFT (НФТ) буквально значит «невзаимозаменяемые токены» (non-fungible
          tokens). Это вид токенов, где каждый экземпляр уникален, его нельзя
          заместить или обменять на другой токен. Хотя изначально токены созданы
          как взаимозаменяемые активы.
        </StyledP>
      </BlockP>
      </BlockCont>
    </Container>
  );
}
export default Header;

const BlockDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BlockCont = styled.div`
    width: 80%;
    padding-top: 10rem;
`

const Container = styled.div`
  background: url("	http://themetum.com/nftfox/img/dark-header.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 10%;
`;

const StyledH1 = styled.h1`
  line-height: 54px;
  color: #f7f7f7;
  font-weight: 700;
  font-size: 36px;
  font-family: "Poppins";
  width: 55%;
`;

const BlockP = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    margin-left: 1rem;
    `

const StyledP = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 29px;
  color: #c6c6cf !important;
  width: 64%;
  text-align: center;
  margin: 0;
  padding: 0;
`;
