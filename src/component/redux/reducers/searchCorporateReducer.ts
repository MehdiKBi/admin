import {
  ERROR_SEARRCH_CORPORATE,
  searchCorporateDispatch,
  SEARCH_CORPORATE,
} from "../Types/searchbarCorporateType";

interface defaultState {
  search?: any;
  Searcherror:any
}

const initialState: defaultState = {
  search: "",
  Searcherror:""
};

export const searchReducer = (
  state: defaultState = initialState,
  action: searchCorporateDispatch
) => {
  switch (action.type) {
    case SEARCH_CORPORATE:
      return {
        ...state,
        search: action.payload,
      };
    case ERROR_SEARRCH_CORPORATE:
      return {
        ...state,
        Searcherror: action.payload

      }
    default:
      return state;
  }
};
