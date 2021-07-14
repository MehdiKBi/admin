import { Dispatch } from "redux";
import { companyDispatcher, GET_COMPANY } from "../Types/company";
import axios from "axios";
import { ERROR_PAGE } from "../Types/error";



export const getcompanyAction =  (skip:any) => async (dispatch: Dispatch<companyDispatcher>) => {
  const fullUrl = "https://staging-api.clevexa.at/travel/getCars";
  const params= {
    limit: 8,
    skip:skip
  }
  try {
    const response = await axios.get(fullUrl, { params })
    dispatch( {
      type: GET_COMPANY,
      payload : response.data
    })
  }catch(e) {
    dispatch({
      type: ERROR_PAGE,
      payload: "error"
    })  
  }
}