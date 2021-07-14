import { companyDispatcher, ERROR_PAGE, GET_COMPANY } from "../Types/company";


export interface defaultState{
  company?: any
  error:any
}

const initialState: defaultState = {
  company: [],
  error:""
}


export const companyReducer = (
  state:defaultState = initialState,
  action : companyDispatcher
) => {
  switch (action.payload) {
    case GET_COMPANY:
      return {
        ...state,
        company: action.payload
      }
    case ERROR_PAGE:
      return {
        ...state,
        error : action.payload 
      }
    default:
      return state
  }
}