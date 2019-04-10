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
  // &category=business
  setCategory = category => {
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
  };

  setArticle = article => {
    console.log(article);
    this.setState({
      article: article
    });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { articles, article, category } = this.state;

    return (
      <div>
        <h2> Home / About </h2>
        <hr />
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
            />
          )}
        />
        <Route
          path="/news/:id"
          component={() => <DetailArticle article={article} />}
        />
      </div>
    );
  }
}

export default App;
