import React from "react";
import { FilterStatus } from "./filterSlice";
import { List, Button, Title, MainWrapper } from "./styles/FiltersStyle";

const Filters = ({ value, onChange }) => {
  const FilteredTodos = Object.keys(FilterStatus).map((key) => {
    const value = FilterStatus[key];
    const handleClick = () => {
      onChange(value);
    };

    return (
      <List key={value}>
        <Button onClick={handleClick}>{key}</Button>
      </List>
    );
  });

  return (
    <>
      <MainWrapper>
        <Title>Filter by</Title>
        <div>{FilteredTodos}</div>
      </MainWrapper>
    </>
  );
};

export default Filters;
