export const GET_CHECKLIST = "GET_CHECKLIST";
export const GET_CHECKLIST_ERROR = "GET_CHECKLIST_ERROR";
export const CHECKLIST_LOADING = "CHECKLIST_LOADING";
export const ADD_CHECKLIST = "ADD_CHECKLIST";

export interface checklistSuccess {
  type: typeof GET_CHECKLIST;
  payload: any;
}

export interface addChecklist{
  type: typeof ADD_CHECKLIST;
  payload: any
}

export interface checklistLoading {
  type: typeof CHECKLIST_LOADING;
  payload: any;
}

export interface cheklistError {
  type: typeof GET_CHECKLIST_ERROR;
  payload: any;
}

export type checklistDipatch =
  | checklistSuccess
  | cheklistError
  | checklistLoading
  | addChecklist
  ;
