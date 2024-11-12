import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: [
        {type:"All" },
        {type:"Консультация" },
        {type:"Анализ" },
        {type:"Диагностика" },
        {type:"Процедура" },
        {type:"Процедура" },
    ],
    currFilter: "All",
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
        state.currFilter = action.payload;
        },
    },
});

export const {setFilter } = filterSlice.actions;
export default filterSlice.reducer;