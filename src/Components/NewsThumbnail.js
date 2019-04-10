import React from "react";
import styled from "styled-components";

const NewsThumbnail = ({
  title,
  author,
  description,
  urlToImage,
  source: { name }
}) => {
  return (
    <ThumbnailContainer>
      <NewsDetail>
        <NewsTitle>{title}</NewsTitle>
        <span>
          <b>Author :</b> {author} - <b>Source :</b> {name} <span />
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
  border: "2px solid grey",
  borderRadius: "5px",
  display: "grid",
  gridTemplateColumns: "70% 30%",
  marginBottom: "15px"
});

const NewsDetail = styled.div({
  padding: "15px",
  height: "200px",
  boxSizing: "border-box"
});

const ImgThumbnail = styled.div({
  //   backgroundImage:
  //     "url(https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1140163617%2F960x0.jpg%3Ffit%3Dscale)",
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

export default NewsThumbnail;
