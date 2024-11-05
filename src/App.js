import React from "react";
import ItemList from "./components/List"; 
import AddItemForm from "./components/AddItemForm";
import ItemFilter from "./components/Filter"; 
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "./i18n";

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("items.menuTitle")}</h1>
      <LanguageSwitcher />
      <AddItemForm />
      <ItemFilter /> 
      <ItemList /> 
    </div>
  );
};

export default App;