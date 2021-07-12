export const GET_CORPORATE = "GET_CORPORATE";
export const ADD_CORPORATE = "ADD_CORPORATE";
export const NEW_CORPORATE = "ADD_CORPORATE";

export interface corporateSucsses{
  type: typeof GET_CORPORATE;
  payload:any
}

export interface addcorporateSucces{
  type: typeof ADD_CORPORATE;
  payload:any
}


export interface createnewCorp{
  type: typeof NEW_CORPORATE;
  payload: any

}



export type corporatesDispatchTypes = corporateSucsses | addcorporateSucces |createnewCorp;

