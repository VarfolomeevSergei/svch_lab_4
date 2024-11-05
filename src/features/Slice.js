// слайс для управления предметами
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [
    { id: 1, name: "Консультация терапевта", type: "Консультация", price: 1500 },
    { id: 2, name: "Анализ крови общий", type: "Анализ", price: 800 },
    { id: 3, name: "УЗИ брюшной полости", type: "Диагностика", price: 2000 },
    { id: 4, name: "Флюорография", type: "Диагностика", price: 500 },
    { id: 5, name: "Консультация кардиолога", type: "Консультация", price: 1800 },
    { id: 6, name: "ЭКГ", type: "Диагностика", price: 1200 },
    { id: 7, name: "Массаж спины", type: "Процедура", price: 1000 },
    { id: 8, name: "Физиотерапия", type: "Процедура", price: 1500 },
    { id: 9, name: "Консультация стоматолога", type: "Консультация", price: 1200 },
    { id: 10, name: "Лечение кариеса", type: "Процедура", price: 2500 },
  ],
  filter: 'Все',
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addItem, updateItem, deleteItem, setFilter } = itemsSlice.actions;
export default itemsSlice.reducer;