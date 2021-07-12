import {
  GET_CORPORATE,
  corporatesDispatchTypes,
  CATCH_ERROR,
} from "../Types/corporateTypes";

interface defaultState {
  corporate?: any;
  error?: any;
}

const initialState: defaultState = {
  corporate: {},
  error: "",
};

export const corporatReducer = (
  state: defaultState = initialState,
  action: corporatesDispatchTypes
): defaultState => {
  switch (action.type) {
    case GET_CORPORATE:
      return {
        ...state,
        corporate: action.payload,
      };
    case CATCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
