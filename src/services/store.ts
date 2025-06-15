import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

// Добавь недостающий импорт
import feedsReducer from './slices/feedsSlice';

// Импортируем все редьюсеры
import authReducer from './slices/authSlice';
// import otherReducers from './slices/...';

import ingredientsReducer from './slices/ingredientsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    ingredients: ingredientsReducer,
    feeds: feedsReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Типизированные хуки
export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
