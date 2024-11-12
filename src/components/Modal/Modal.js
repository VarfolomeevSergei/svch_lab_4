import React, { useState, useEffect } from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../features/Slice";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Modal = ({ active, setActive, itemid }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [type, setType] = useState("Диагностика");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    if (itemid) {
      const item = items.find((e) => e.id === itemid);
      if (itemid) {
        setName(item.name);
        setType(item.type);
        setPrice(item.price);
      }
    } else {
      setName("");
      setType("Диагностика");
      setPrice("");
    }
  }, [itemid, items]);



  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedPrice = parseInt(price);

    if (parsedPrice <= 0) {
      setError(t("error"));
      return;
    }

    dispatch(updateItem({ id: itemid, name, type, price: parsedPrice }));
    setName("");
    setPrice("");
    setError("");
    setActive(false);
  };

  const filters = useSelector((state) => {
    return state.filters.filters.filter(
      (filter) => filter.type !== "All"
    );
  });

  return (
    <section
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setActive(false)}>
          &#215;
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t("items.editName")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {filters.map((filter) => (
              <option key={filter.type} value={filter.type}>
                {filter.type}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder={t("items.editPrice")}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          {error && <p style={{ color: "red" }}>{t("items.error")}</p>}
          <button type="submit">{t("items.editItem")}</button>
        </form>
      </div>
    </section>
  );
};

export default Modal;