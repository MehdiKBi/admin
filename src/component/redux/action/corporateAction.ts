import axios from "axios"
import { Dispatch } from "redux"
import { CATCH_ERROR, corporatesDispatchTypes, GET_CORPORATE } from "../Types/corporateTypes";





export const getcorporateData =  (skip: any) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {

  const fulUrl = "https://api.corplife.at/v0/corporates"

  const params ={
    limit: 8,
    skip: skip
  }
try {
  const response = await axios.get(fulUrl, { params })  
  dispatch({
    type: GET_CORPORATE,
    payload: response.data.data
  });
} catch (e) {
  console.log("redux Error", e);
  dispatch({
    type: CATCH_ERROR,
    payload: e
  })
 }
};



