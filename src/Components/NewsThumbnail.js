import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const NewsThumbnail = ({
  title,
  author,
  description,
  urlToImage,
  source,
  setArticle,
  history,
  publishedAt
}) => {
  const setArticleAndRedirect = () => {
    setArticle();
    history.push("/news");
  };

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
    <ThumbnailContainer onClick={() => setArticleAndRedirect()}>
      <NewsDetail>
        <NewsTitle>{title}</NewsTitle>
        <span>
          <b>Author :</b> {author} - <b>Source :</b> {source && source.name} |{" "}
          {getDateDescription(publishedAt)}
          <span />
        </span>
        <NewsThumbParagraph>
          {description}
          <FadeEffect />
        </NewsThumbParagraph>
      </NewsDetail>
      <ImgThumbnail style={{ backgroundImage: `url(${urlToImage})` }} />
    </ThumbnailContainer>
  );
};

const ThumbnailContainer = styled.div({
  padding: "15px",
  border: "2px solid lightgrey",
  borderRadius: "5px",
  display: "grid",
  gridTemplateColumns: "70% 30%",
  marginBottom: "15px",
  "&:hover": {
    cursor: "pointer"
  }
});

const NewsDetail = styled.div({
  padding: "15px",
  height: "200px",
  boxSizing: "border-box"
});

const ImgThumbnail = styled.div({
  backgroundSize: "cover",
  borderRadius: "5px",
  height: "200px"
});

const NewsTitle = styled.h2({
  marginTop: "0"
});

const NewsThumbParagraph = styled.p({
  maxHeight: "100px",
  overflow: "hidden",
  textAlign: "justify",
  position: "relative",
  marginBottom: "0"
});

const FadeEffect = styled.span({
  position: "absolute",
  bottom: "0px",
  display: "block",
  width: "100%",
  height: "50px",
  backgroundImage:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%) "
});

export default withRouter(NewsThumbnail);
