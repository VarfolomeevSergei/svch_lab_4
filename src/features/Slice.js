// слайс для управления предметами
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [
    { id: 1, name: "Tерапевт", type: "Консультация", price: 1500 },
    { id: 2, name: "Анализ крови общий", type: "Анализ", price: 800 },
    { id: 3, name: "УЗИ брюшной полости", type: "Диагностика", price: 2000 },
    { id: 4, name: "Флюорография", type: "Диагностика", price: 500 },
    { id: 5, name: "Кардиолог", type: "Консультация", price: 1800 },
    { id: 6, name: "ЭКГ", type: "Диагностика", price: 1200 },
    { id: 7, name: "Массаж спины", type: "Процедура", price: 1000 },
    { id: 8, name: "Физиотерапия", type: "Процедура", price: 1500 },
    { id: 9, name: "Стоматолога", type: "Консультация", price: 1200 },
    { id: 10, name: "Лечение кариеса", type: "Процедура", price: 2500 },
    { id: 11, name: "Эндокринолог", type: "Консультация", price: 2000 },
    { id: 12, name: "Аллерголог", type: "Консультация", price: 1900 },
    { id: 13, name: "УЗИ сердца", type: "Диагностика", price: 2200 },
    { id: 14, name: "МРТ головного мозга", type: "Диагностика", price: 4500 },
    { id: 15, name: "КТ мозга", type: "Диагностика", price: 4000 },
    { id: 16, name: "Гинеколог", type: "Консультация", price: 1800 },
    { id: 17, name: "Общий анализ мочи", type: "Анализ", price: 500 },
    { id: 18, name: "Иммунологические тесты", type: "Анализ", price: 1200 },
    { id: 19, name: "Снятие кардиограммы", type: "Процедура", price: 800 },
    { id: 20, name: "Лечебная физкультура", type: "Процедура", price: 1600 },
  ],
  
  
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
  },
});

export const { addItem, updateItem, deleteItem} = itemsSlice.actions;
export default itemsSlice.reducer;