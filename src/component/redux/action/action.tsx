import { GET_CORPORATE } from "../Types/corporateTypes"



export const corporateAction= (corporate:any) => {
  return {
    type:GET_CORPORATE ,
    payload:corporate
  }
}