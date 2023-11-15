'use client';
import { userReducer } from "./reducers/user";
import { combineReducers, } from 'redux';
import { configureStore } from "@reduxjs/toolkit";

const allReducers = combineReducers({
    User: userReducer,
})

const store = configureStore({
    reducer: allReducers,
    // devTools: true,
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch