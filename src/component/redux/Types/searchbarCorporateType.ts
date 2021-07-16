export const SEARCH_CORPORATE = "SEARRCH_CORPORATE";
export const ERROR_SEARRCH_CORPORATE = "ERROR_SEARRCH_CORPORATE";


export interface searchCorporate{
  type: typeof SEARCH_CORPORATE;
  payload: any;
}


export interface errorsearchCorporate{
  type: typeof ERROR_SEARRCH_CORPORATE;
  payload: any;
}



export type searchCorporateDispatch = searchCorporate | errorsearchCorporate;
