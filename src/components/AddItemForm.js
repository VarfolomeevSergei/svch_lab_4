import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/Slice";
import { useTranslation } from "react-i18next";
import "../i18n";

const AddItemForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [type, setType] = useState("Диагностика");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedPrice = parseInt(price);

    if (parsedPrice <= 0) {
      setError(t("error"));
      return;
    }

    dispatch(addItem({ id: Date.now(), name, type, price: parsedPrice }));
    setName("");
    setPrice("");
    setError("");
  };

  const filters = useSelector((state)=>{
    return state.filters.filters.filter(
      (filter)=>filter.type !== "All"
    );
  })



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t("items.addItem")} 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
      {filters.map((filter) =>(
        <option value={filter.type}>{filter.type}</option>
      ))}
      </select>

      <input
        type="number"
        placeholder={t("items.price")} 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      {error && <p style={{ color: "red" }}>{t("items.error")}</p>} 
      <button type="submit">{t("items.addItem")}</button> 
    </form>
  );
};

export default AddItemForm;