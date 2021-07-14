import { combineReducers } from "redux";
import { checklistReducer } from "../reducers/checklistReducer";
import { errorReducer } from "../reducers/errorReducer";
import { corporatReducer } from "../reducers/corporateReducer";


export const rootReducer = combineReducers({
  corporate: corporatReducer,
  checklist: checklistReducer,
  error: errorReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
