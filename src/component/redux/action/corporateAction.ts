import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_CORPORATE_ERROR,
  corporatesDispatchTypes,
  GET_CORPORATE,
  ADD_CORPORATE,
} from "../Types/corporateTypes";

export const getcorporateData =
  (skip: any) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {
    const fulUrl = "https://api.corplife.at/v0/corporates";
    const params = {
      limit: 8,
      skip: skip,
    };
    try {
      const response = await axios.get(fulUrl, { params });
      dispatch({
        type: GET_CORPORATE,
        payload: response.data.data,
      });
    } catch (e) {
      console.log("redux Error", e);
      dispatch({
        type: GET_CORPORATE_ERROR,
        payload: "get-corporate",
      });
    }
  };

//POST NEW CORPORATE
export const addcorporateAction =
  (id: any) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {
    const addingUrl = "https://api.corplife.at/v0/corporates";
    try {
      const response = await axios.post(addingUrl);
      console.log(response);
      dispatch({
        type: ADD_CORPORATE,
        payload:  "post-corporate",
      });
    } catch (e) {
      dispatch({
        type: GET_CORPORATE_ERROR,
        payload: "add_corporate",
      });
    }
  };
