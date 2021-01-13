import React, { useState } from "react";
import { FilterStatus } from "./filterSlice";
import { List, Button, Title, MainWrapper } from "./styles/FiltersStyle";

const Filters = ({ onChange, isActive }) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const FilteredTodos = Object.keys(FilterStatus).map((key) => {
    const value = FilterStatus[key];
    const handleClick = () => {
      onChange(value);
      setActiveTabId(value);
    };

    return (
      <List key={value}>
        <Button
          isActive={
            activeTabId === value ? (isActive = true) : (isActive = false)
          }
          onClick={handleClick}
        >
          {key}
        </Button>
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
