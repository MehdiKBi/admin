import { combineReducers } from "redux";
import { checklistReducer } from "../reducers/checklistReducer";
import { corporatReducer } from "../reducers/reducers";


export const rootReducer = combineReducers({
  corporate: corporatReducer,
  checklist: checklistReducer
})

export type RootState = ReturnType<typeof rootReducer>;
