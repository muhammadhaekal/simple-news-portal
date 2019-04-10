import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsThumbnail from "./Components/NewsThumbnail";
class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1d46de04e38a4c14946080b7164e9f28`
      )
      .then(({ data: { articles } }) => {
        this.setState({
          articles
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { articles } = this.state;

    return (
      <MainContainer>
        <FilterBox>1</FilterBox>
        <ListNewsContainer>
          {articles.map((article, i) => (
            <NewsThumbnail {...article} />
          ))}
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

export default App;
