import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../features/Slice"; 
import { useTranslation } from "react-i18next";
import Modal from "./Modal/Modal";

const ItemList = () => {
  const { t } = useTranslation();
  const items = useSelector((state) => {
    if (state.filters.currFilter === "All") { 
      return state.items.items;
    }
    return state.items.items.filter(
      (item) => item.type === state.filters.currFilter 
    );
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id)); 
  };
 
  
  const [modalActive, setModalActive] = useState(false);
  const [editid, setEditId] = useState(null);

  const handleEdit = (id) => {
    setEditId(id);
    setModalActive(true);
  };

  return (
    <div>
      
      <h2 className="itemsMenu">{t("items.services2")}</h2> 
      
      <ul>
        {items.map((item) => ( 
          <li key={item.id}>
            {t(item.name)} — {t(item.type)} — {item.price}₽
            <div>

            <button onClick={() => handleEdit(item.id)}>
              {t("items.edit")} 
            </button>
            

            <button onClick={() => handleDelete(item.id)}>
              {t("items.delete")} 
            </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal active={modalActive} setActive={setModalActive} itemid={editid}/>
    </div>
  );
};

export default ItemList;