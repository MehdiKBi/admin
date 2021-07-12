export const GET_CORPORATE = "GET_CORPORATE";
export const CATCH_ERROR = "CATCH_ERROR";

export interface corporateSuccss {
  type: typeof GET_CORPORATE;
  payload: any;
}

export interface failedAccess {
  type: typeof CATCH_ERROR;
  payload: any;
}

export type corporatesDispatchTypes = corporateSuccss | failedAccess;
