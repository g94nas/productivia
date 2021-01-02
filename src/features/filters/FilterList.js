import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilterStatus } from "./filterSlice";
import Filters from "./Filters";

const FilterList = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.filters);

  const handleChange = (status) => {
    dispatch(changeFilterStatus(status));
  };

  return (
    <div>
      <Filters value={status} onChange={handleChange} />
    </div>
  );
};

export default FilterList;
