import {
  checklistDipatch,
  ERROR_LIST,
  GET_CHECKLIST,
} from "../Types/checklistTypes";

interface defaultState {
  checklist?: any;
  error: any;
}
const initialState: defaultState = {
  checklist: [],
  error: "",
};

export const checklistReducer = (
  state: defaultState = initialState,
  action: checklistDipatch
) => {
  switch (action.type) {
    case GET_CHECKLIST:
      return {
        ...state,
        checklist: action.payload,
      };
    case ERROR_LIST:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
