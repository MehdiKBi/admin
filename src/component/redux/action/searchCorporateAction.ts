import axios from "axios";
import { Dispatch } from "redux";
import {
  searchCorporateDispatch,
  SEARCH_CORPORATE,
} from "../Types/searchbarCorporateType";




  export const searchCorporateAction =
  (search: string) => async (dispatch: Dispatch<searchCorporateDispatch>) => {
    const params = {
      search: search,
      getAll:1
    };
    try {
      const response = await axios.get(
        "https://api.corplife.at/v0/corporates", {params}
      );
      dispatch({
        type: SEARCH_CORPORATE,
        payload: response.data,
      });
      console.log(response);
    } catch (e) {
      console.log("error to search",e);
    }
  };
