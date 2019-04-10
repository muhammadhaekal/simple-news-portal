import React from "react";
import styled from "styled-components";

const DetailArticle = ({
  article: { title, author, description, urlToImage, source, publishedAt }
}) => {
  const getDateDescription = publishedAt => {
    console.log(publishedAt);
    const date = new Date(publishedAt);

    const dMonth = date.getMonth();
    const dYear = date.getFullYear();
    const dDay = date.getDate();

    const day = dDay + 1;
    let month = dMonth + 1;

    switch (month) {
      case 1:
        month = "Jan";
        break;
      case 2:
        month = "Feb";
        break;
      case 3:
        month = "Mar";
        break;
      case 4:
        month = "Apr";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "Jun";
        break;
      case 7:
        month = "Jul";
        break;
      case 8:
        month = "Aug";
        break;
      case 9:
        month = "Sep";
        break;
      case 10:
        month = "Dec";
        break;
      case 11:
        month = "Nov";
        break;
      case 12:
        month = "Dec";
        break;
      default:
        month = "";
    }

    return `${day} ${month} ${dYear}`;
  };

  return (
    <MainContainer>
      <h2>{title}</h2>
      <span>
        <b>Author :</b> {author} - <b>Source :</b> {source && source.name} -{" "}
        <b>Published At :</b> {getDateDescription(publishedAt)}
        <span />
      </span>
      <ImgContainer>
        <ArticleImg style={{ backgroundImage: `url(${urlToImage})` }} />
      </ImgContainer>
      <p>{description}</p>
    </MainContainer>
  );
};

const MainContainer = styled.div({
  margin: "0 15%"
});

const ImgContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "15px 0"
});

const ArticleImg = styled.div({
  width: "600px",
  height: "250px",
  backgroundSize: "cover"
});

export default DetailArticle;
