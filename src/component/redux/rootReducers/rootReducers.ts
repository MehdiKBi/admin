import { combineReducers } from "redux";
import { checklistReducer } from "../reducers/checklistReducer";
import { companyReducer } from "../reducers/companyReducer";
import { errorReducer } from "../reducers/errorReducer";
import { corporatReducer } from "../reducers/reducers";


export const rootReducer = combineReducers({
  corporate: corporatReducer,
  checklist: checklistReducer,
  error: errorReducer,
  company :  companyReducer
})

export type RootState = ReturnType<typeof rootReducer>;
