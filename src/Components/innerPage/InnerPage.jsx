import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function InnerPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  console.log(id);
  // console.log(setPost);
  return (
    <StyledB>
      <Cont>
        <div>
          {post && (
            <>
              <img src={id} alt="sfgfd" srcset="" />
            <Link to={`${id}`}></Link>
            </>
          )}
        </div>
        <Blockp>
          <StyledP>
            Токены, в свою очередь, представляют собой запись в регистре внутри
            этой блокчейн-цепочки. Отличительной чертой большинства токенов
            является принцип взаимозаменяемости. Его можно сравнить с валютой (в
            том числе криптовалютой): один доллар, один рубль или один биткоин
            можно с легкостью заменить одним долларом, одним рублем или одним
            биткоином, принадлежащим другим пользователям.
          </StyledP>
        </Blockp>
      </Cont>
    </StyledB>
  );
}

export default InnerPage;

const StyledB = styled.body`
  background: #1b1b36 !important;
  height: 750px;
  margin: 0 auto;
`;

const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;
const StyledP = styled.p`
  color: white;
  width: 40%;
  margin-left: 1rem;
`;
const Blockp = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
`;

const ImgStyled = styled("img")`
  width: 260px;
  height: 200px;
  border-radius: 10px 0px 0px 10px;
  margin: 10px auto;
`;
