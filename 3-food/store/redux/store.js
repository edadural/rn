import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites';

export const store = configureStore({
    reducer: {
        favoriteFoods: favoritesReducer,
    },
})