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
          <ArticleImg style={{ backgroundImage: `url(${urlToImage})` }} />
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

const ArticleImg = styled.div({
  width: "600px",
  height: "250px",
  backgroundSize: "cover"
});

export default DetailArticle;
