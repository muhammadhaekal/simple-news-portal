import React from "react";
import styled from "styled-components";
import NewsThumbnail from "../Components/NewsThumbnail";

const Home = ({ articles, setArticle, category, handleOnChange }) => {
  return (
    <MainContainer>
      <FilterBox>
        <SelectCategory
          name="category"
          value={category}
          onChange={handleOnChange}
        >
          <option value="">All Category</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="business">Business</option>
          <option value="general">General</option>
        </SelectCategory>
      </FilterBox>
      <ListNewsContainer>
        {articles.map((article, i) => (
          <NewsThumbnail
            key={i}
            {...article}
            setArticle={() => setArticle(article)}
          />
        ))}
      </ListNewsContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "20% 60% 20%"
});

const ListNewsContainer = styled.div({});

const FilterBox = styled.div({
  padding: "15px"
});

const SelectCategory = styled.select({
  width: "100%",
  backgroundColor: "lightgrey",
  borderRadius: "5px",
  fontSize: "14px",
  padding: "4px"
});

export default Home;
