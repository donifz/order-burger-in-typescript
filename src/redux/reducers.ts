import { combineReducers } from "redux";
import { burgerReducer } from "./burgerReducer";


export const Reducers = combineReducers({
    burgerReducer
})
export type RootState = ReturnType<typeof Reducers>