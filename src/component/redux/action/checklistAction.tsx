import axios from "axios";
import { Dispatch } from "redux";
import { checklistDipatch, ERROR_LIST, GET_CHECKLIST } from "../Types/checklistTypes";

export const checklistAction =
  () => async (dispatch: Dispatch<checklistDipatch>) => {
    const fullUrl =
      "https://api-dev.corplife.at/v0/corplife/checklists?skip=0&sortBy=name&limit=16";
    try {
      const response = await axios.get(fullUrl);
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
