export const GET_COMPANY = "GET_COMPANY";
export const ERROR_PAGE = "ERROR_PAGE";

export interface companySucc{
  type: typeof GET_COMPANY;
  payload: any;
}


export interface errorPage{
  type: typeof ERROR_PAGE;
  payload: any
}


export type companyDispatcher = companySucc | errorPage;