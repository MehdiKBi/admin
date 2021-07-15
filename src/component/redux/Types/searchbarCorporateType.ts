export const SEARRCH_CORPORATE = "SEARRCH_CORPORATE";


export interface searchCorporate{
  type: typeof SEARRCH_CORPORATE;
  payload: any
}

export type searchCorporateDispatch = searchCorporate;
