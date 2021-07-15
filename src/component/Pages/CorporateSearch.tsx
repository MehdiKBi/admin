import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchCorporateAction } from "../redux/action/searchCorporateAction";
import { RootState } from "../redux/rootReducers/rootReducers";

// export interface defaultState{
//   search:any

// }


function CorporateSearch() {
  const dispatch = useDispatch();

  const formik = useFormik<any>({
    initialValues: {
      search: "",
    },
    onSubmit: () => console.log("CLICK"),
  });

  // useEffect(() => {
    
  // },[]);

  const handelSubmit = (e: any) => {
    e.preventDefault();
    console.log(formik.values.search);

    dispatch(searchCorporateAction(formik.values.search));

    // dispatch(searchCorporateAction(""))
  };



  return (
    <div className="input">
      <form onSubmit={(e) => handelSubmit(e)}>
        <input
          style={{ width: "20em", height: "2.5em" }}
          type="text"
          name="search"
          placeholder="search"
          value={formik.values.search}
          onChange={formik.handleChange}
        />
        <button className="btn btn-danger">Search</button>
      </form>
    </div>
  );
}

const MapToStateProps = (state: RootState) => {

  return {
    search:state.search
  }

}

export default CorporateSearch;


