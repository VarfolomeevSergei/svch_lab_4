import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/filterSlice"; 
import { useTranslation } from "react-i18next";

const ItemFilter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  const filters = useSelector((state) =>{
    return state.filters.filters
  })

  return (
    <div className="filter">
      <label>{t("items.services")}:</label> 
      <select onChange={handleFilterChange}>
        {filters.map((filter)=>(
          <option value = {filter.type}>{filter.type}</option>
        ))}
      </select>
    </div>
  );
};

export default ItemFilter; 