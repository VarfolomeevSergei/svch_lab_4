import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../features/Slice"; 
import { useTranslation } from "react-i18next";

const ItemList = () => {
  const { t } = useTranslation();
  const items = useSelector((state) => {
    if (state.items.filter === "Все") { 
      return state.items.items;
    }
    return state.items.items.filter(
      (item) => item.type === state.items.filter 
    );
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id)); 
  };

  return (
    <div>
      <h2 className="itemsMenu">{t("items.services2")}</h2> 
      <ul>
        {items.map((item) => ( 
          <li key={item.id}>
            {t(item.name)} — {t(item.type)} — {item.price}₽
            <button onClick={() => handleDelete(item.id)}>
              {t("items.delete")} 
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;