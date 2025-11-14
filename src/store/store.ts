import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "../redux/counter/counter.reducer";
import { ageReducer } from "../redux/age/age.reducer";
import { listReducer } from "../redux/list/List.reducer";
import { thunk } from "redux-thunk";
const combinedReducer = combineReducers({
    counterReducer: counterReducer,
    ageReducer: ageReducer,
    list:listReducer
})
export const store = createStore(combinedReducer, undefined, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>