import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DetailArticle from "./pages/DetailArticle";

class App extends Component {
  state = {
    articles: [],
    article: {},
    category: ""
  };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=1d46de04e38a4c14946080b7164e9f28`
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

  setCategory = () => {
    const { category } = this.state;

    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&${
          category === "" ? "" : `category=${category}&`
        }apiKey=1d46de04e38a4c14946080b7164e9f28`
      )
      .then(({ data: { articles } }) => {
        console.log(articles);
        this.setState({
          articles
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  setArticle = article => {
    this.setState({
      article: article
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.setCategory();
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { articles, article, category } = this.state;

    return (
      <div>
        <NavBar>
          <Link to="/">Home</Link>
        </NavBar>
        <HrLine />
        <Route
          path="/"
          exact
          component={() => (
            <Home
              articles={articles}
              setArticle={this.setArticle}
              setCategory={this.setCategory}
              category={category}
              handleOnChange={this.handleOnChange}
              setCategory={this.setCategory}
            />
          )}
        />
        <Route
          path="/news"
          component={() => <DetailArticle article={article} />}
        />
      </div>
    );
  }
}

const NavBar = styled.h2({
  textAlign: "center"
});

const HrLine = styled.hr({
  display: "block",
  height: "1px",
  border: "0",
  borderTop: "2px solid lightgrey",
  margin: "1em 0",
  padding: "0"
});

export default App;
