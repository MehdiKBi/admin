import { useFormik } from "formik";
import React from "react";
import { connect, useDispatch } from "react-redux";
import * as Yup from "yup";
import { addcorporateAction } from "../redux/action/corporateAction";
import { RootState } from "../redux/rootReducers/rootReducers";

interface defaultState {
  corporatestat: any;
}

function AddCorporate({ corporatestat }: defaultState) {

  const dispatch = useDispatch()

  const formik = useFormik<any>({
    initialValues: {
      name: "",
      domain: "",
      mailrestriction: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      domain: Yup.string().required("domain is required"),
    }),
    // handle form submitting
    onSubmit: () => console.log("CLICK"),
  });

  const handelSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addcorporateAction(formik.values))
  };

    console.log(formik.values);
    
  return (
    <div className="mt-5">
      <form onSubmit={(e) => handelSubmit(e)}>
        <div className="input-group mt-5"></div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
          placeholder="Name"
        />
        <div className="input-group mt-4"></div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
          placeholder="domain"
        />
        <div className="input-group mt-4"></div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
          placeholder="mail restriction"
        />
        <button className="btn btn-danger mt-5">ADD CORPORATE</button>
      </form>
    </div>
  );
}
export const mapStateToProps = (state: RootState) => {
  return {
    corporatestat: state.corporate,
  };
};

export default connect(mapStateToProps, null)(AddCorporate);
