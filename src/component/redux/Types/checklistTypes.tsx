export const GET_CHECKLIST = "GET_CHECKLIST";
export const ERROR_LIST = "ERROR_LIST";

export interface checklistSuccess {
  type: typeof GET_CHECKLIST;
  payload: any;
}


export interface cheklistError{
  type: typeof ERROR_LIST;
  payload: any;
}


export type checklistDipatch = checklistSuccess | cheklistError;