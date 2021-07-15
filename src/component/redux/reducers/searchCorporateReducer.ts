import {
  searchCorporateDispatch,
  SEARRCH_CORPORATE,
} from "../Types/searchbarCorporateType";

interface defaultState {
  search: string;
}

const initialState: defaultState = {
  search: "",
};

export const searchReducer = (
  state: defaultState = initialState,
  action: searchCorporateDispatch
) => {
  switch (action.payload) {
    case SEARRCH_CORPORATE:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
