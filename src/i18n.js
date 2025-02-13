
// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        items: {
          menuTitle: "Private medical center services",
          Consultation: "Consultation",
          Analysis: "Analysis",
          Diagnostics: "Diagnostics",
          Procedures: "Procedures",
          all: "All",
          addItem: "Add service",
          price: "Price",
          services: "Filter by service type",
          error: "Price needs to be positive",
          services2: "Services",
          delete: "Delete",
          edit: "Edit",
          editName: "Edit Name",
          editPrice: "Edit price",
          editItem: "Edit"

        },
      },
    },
    ru: {
      translation: {
        items: {
          menuTitle: "Услуги частного медицинского центра",
          Consultation: "Консультация",
          Analysis: "Анализ",
          Diagnostics: "Диагностика",
          Procedures: "Процедуры",
          all: "Все",
          addItem: "Добавить услугу",
          price: "Цена",
          services: "Фильтр по типу услуги",
          error: "Цена должна быть положительной",
          services2: "Услуги",
          delete: "Удалить",
          edit: "Изменить",
          editName: "Изменить услугу",
          editPrice: "Изменить цену",
          editItem: "Изменить"
        },
      },
    },
  },
  lng: "ru", // Язык по умолчанию
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;


























// // i18n.js
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: {
//         items: {
//           menuTitle: "Private medical center services",
//           Consultation: "Consultation",
//           Analysis: "Analysis",
//           dessert: "Dessert",
//           all: "All",
//           addDish: "Add service",
//           price: "Price",
//           services: "Filter by services Type",
//           error: "Price need to be positive",
//           menu: "Menu",
//           delete: "Delete",
//           "Caesar Salad": "Caesar Salad",
//           Carbonara: "Carbonara",
//           Tiramisu: "Tiramisu",
//           Borscht: "Borscht",
//           Steak: "Steak",
//           "Panna Cotta": "Panna Cotta",
//           "Olivier Salad": "Olivier Salad",
//           Lasagna: "Lasagna",
//           "Creme Brulee": "Creme Brulee",
//           "Chicken Soup": "Chicken Soup",
//           "Greek Salad": "Greek Salad",
//           "Mushroom Risotto": "Mushroom Risotto",
//           Cheesecake: "Cheesecake",
//           "Pumpkin Soup": "Pumpkin Soup",
//           "Meat Pies": "Meat Pies",
//         },
//       },
//     },
//     ru: {
//       translation: {
//         items: {
//           menuTitle: "Услуги частного медицинского центра",
//           Consultation: "Консультация",
//           Analysis: "Анализ",
//           Diagnostics: "Диагностика",
//           all: "Все",
//           addItem: "Добавить услугу",
//           price: "Цена",
//           services: "Фильтр по типу услуги",
//           error: "Цена должна быть положительной",
//           menu: "Меню",
//           delete: "Удалить",
//           "Caesar Salad": "Салат Цезарь",
//           Carbonara: "Карбонара",
//           Tiramisu: "Тирамису",
//           Borscht: "Борщ",
//           Steak: "Стейк из говядины",
//           "Panna Cotta": "Панна Котта",
//           "Olivier Salad": "Оливье",
//           Lasagna: "Лазанья",
//           "Creme Brulee": "Крем-брюле",
//           "Chicken Soup": "Куриный суп",
//           "Greek Salad": "Греческий салат",
//           "Mushroom Risotto": "Ризотто с грибами",
//           Cheesecake: "Чизкейк",
//           "Pumpkin Soup": "Суп-пюре из тыквы",
//           "Meat Pies": "Пирожки с мясом",
//         },
//       },
//     },
//   },
//   lng: "ru", // Язык по умолчанию
//   fallbackLng: "ru",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
