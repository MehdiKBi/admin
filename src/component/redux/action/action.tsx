import axios from "axios"
import { Dispatch } from "redux"
import { CATCH_ERROR, corporatesDispatchTypes, GET_CORPORATE } from "../Types/corporateTypes";





export const getcorporateData =  (corporate: any) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {

  const fulUrl= "https://api.corplife.at/v0/corporates?limit=30&skip=0"
  
try {
  const response = await axios.get(fulUrl)
  console.log(response.data);
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





// export const getcorporateData= (corporate:any) => {
//   return {
//     type:GET_CORPORATE ,
//     payload:corporate
//   }
// }

