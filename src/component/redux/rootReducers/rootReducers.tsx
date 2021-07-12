import { combineReducers } from "redux";
import { corporatReducer } from "../reducers/reducers";


export const rootReducer = combineReducers({
  corporate: corporatReducer
})

export type RootState = ReturnType<typeof rootReducer>;
