import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../features/Slice"; 
import { useTranslation } from "react-i18next";

const ItemFilter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter">
      <label>{t("items.services")}:</label> 
      <select onChange={handleFilterChange}>
        <option value="Все">{t("items.all")}</option> 
        <option value="Консультация">{t("items.Consultation")}</option> 
        <option value="Анализ">{t("items.Analysis")}</option> 
        <option value="Диагностика">{t("items.Diagnostics")}</option>
        <option value="Процедура">{t("items.Procedure")}</option>
      </select>
    </div>
  );
};

export default ItemFilter; 