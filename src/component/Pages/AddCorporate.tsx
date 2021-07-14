import React from "react";

function AddCorporate() {
  return (
    <div className="mt-5">
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
    </div>
  );
}

export default AddCorporate;
