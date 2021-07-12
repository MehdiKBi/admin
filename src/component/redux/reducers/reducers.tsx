import { GET_CORPORATE,corporatesDispatchTypes } from "../Types/corporateTypes";




interface defaultState{
  corporate?: any
}

const initialState :defaultState= {
  corporate :{},
}

export const corporateReducer = (
  state: defaultState = initialState,
  action : corporatesDispatchTypes
): defaultState => {

  switch (action.type) {
    case GET_CORPORATE:
      return {
        ...state,
        corporate:action.payload
      }
  
    default:
      return state
  }

}