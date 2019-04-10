import React from "react";
import styled from "styled-components";

const DetailArticle = ({
  article: { title, author, description, urlToImage, source }
}) => {
  return (
    <MainContainer>
      <h2>{title}</h2>
      <span>
        <b>Author :</b> {author} - <b>Source :</b> {source && source.name}{" "}
        <span />
      </span>
      <p>
        <ImgContainer>
          <img src={urlToImage} alt="" />
        </ImgContainer>
      </p>
      <p>{description}</p>
    </MainContainer>
  );
};

const MainContainer = styled.div({
  margin: "0 15%"
});

const ImgContainer = styled.div({
  display: "flex",
  justifyContent: "center"
});

export default DetailArticle;
