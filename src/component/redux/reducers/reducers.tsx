import { GET_CORPORATE,corporatesDispatchTypes, ADD_CORPORATE, NEW_CORPORATE } from "../Types/corporateTypes";




interface defaultState{
  corporate?: any
  addCorporate?: any
  newCorporate?:any
  
}

const initialState :defaultState= {
  corporate: {},
  addCorporate: {},
  newCorporate:""
  
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
    case ADD_CORPORATE:
      return {
        ...state,
        addCorporate:action.payload
      }
    case NEW_CORPORATE:
      return {
        ...state,
        newCorporate: action.payload
      }
    default:
      return state
  }
}