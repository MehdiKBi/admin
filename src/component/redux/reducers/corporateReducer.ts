import {
  GET_CORPORATE,
  corporatesDispatchTypes,
  GET_CORPORATE_ERROR,
  CORPORATE_LOADING,
  ADD_CORPORATE,
  DELETE_CORPORATE,
} from "../Types/corporateTypes";

interface defaultState {
  corporate?: any;
  error?: string;
  loading: boolean;
  addcorporate?: any
}

const initialState: defaultState = {
  corporate: [],
  error: "",
  loading: true,
  addcorporate: []
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
        loading:false
      };
      case ADD_CORPORATE:
        return {
          ...state,
          addcorporate: action.payload,
          loading: false,
        }
    case GET_CORPORATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading:true
      };
    case CORPORATE_LOADING:
      return {
        ...state,
        error: action.payload,
        loading:true
      };
    case DELETE_CORPORATE:
      return {
        ...state,
        corporate:action.payload
      }
    default:
      return state;
  }
};
