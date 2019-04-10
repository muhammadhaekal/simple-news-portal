import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <MainContainer>
        <FilterBox>1</FilterBox>
        <ListNewsContainer>
          <NewsThumbnail>
            <NewsDetail>
              <NewsTitle>Mobil Masuk Jurang</NewsTitle>
              <span>
                <b>Author :</b> Joni <b>Source :</b> Kumparan <span />
              </span>
              <NewsThumbParagraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto ex accusamus sequi, voluptatum distinctio rem
                cupiditate consequatur quae totam ad non at id. Pariatur tempora
                odio nemo adipisci, sunt laborum. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab, molestiae. Voluptatibus,
                voluptatem dicta nostrum, nihil hic fuga ratione voluptates et
                perspiciatis nam assumenda! Commodi obcaecati quam soluta
                adipisci iusto mollitia! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Enim nam nobis voluptatum minima at, facere
                rerum culpa distinctio similique vitae consequatur impedit ipsa
                autem iste fuga deserunt quos dolor maxime.
                <FadeEffect />
              </NewsThumbParagraph>
            </NewsDetail>
            <ImgThumbnail />
          </NewsThumbnail>
        </ListNewsContainer>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "15% 70% 15%"
});

const ListNewsContainer = styled.div({});

const FilterBox = styled.div({});

const NewsThumbnail = styled.div({
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
  backgroundImage:
    "url(https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1140163617%2F960x0.jpg%3Ffit%3Dscale)",
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
  position: "relative"
});

const FadeEffect = styled.div({
  position: "absolute",
  bottom: "0px",
  display: "block",
  width: "100%",
  height: "50px",
  backgroundImage:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9) 100%) "
});

export default App;
