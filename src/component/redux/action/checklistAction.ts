import axios from "axios";
import { Dispatch } from "redux";
import { checklistDipatch, ERROR_LIST, GET_CHECKLIST } from "../Types/checklistTypes";

export const checklistAction =
  (skip:number) => async (dispatch: Dispatch<checklistDipatch>) => {
    const params = {
      limit: 8,
      skip:skip
    };
    const fullUrl =
      "https://api-dev.corplife.at/v0/corplife/checklists";
    try {
      const response = await axios.get(fullUrl, {params});
      dispatch({
        type: GET_CHECKLIST,
        payload: response.data.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: ERROR_LIST,
        payload : e
      })
    }
  };


  