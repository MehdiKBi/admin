import axios from "axios"
import { Dispatch } from "redux"
import { ADD_CORPORATE, corporatesDispatchTypes, GET_CORPORATE } from "../Types/corporateTypes"



export const corporateAction= (corporate:any) => {
  return {
    type:GET_CORPORATE ,
    payload:corporate
  }

}





export const newCorporateAction = () => {
  return {
    type: ADD_CORPORATE,
    payload: ""
  }
}
export const getcorporateData = (corporate:any) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {
  const response = await axios
    .get("https://api.corplife.at/v0/corporates?limit=30&skip=0")
    .catch((err) => {
      console.log("Err: ", err);
    });
  console.log("redux works like a bitch", response);
  dispatch({
    type: ADD_CORPORATE,
    payload: response
  });
};