import { combineReducers } from "redux";
import { corporateReducer } from "../reducers/reducers";


export const rootReducer = combineReducers({
  corporate: corporateReducer
})

export type RootState = ReturnType<typeof rootReducer>;
