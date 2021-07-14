import React from "react";

interface defaultState {
  value: string;
  name: string;
  handleChange?: any;
}

function InputFormik({ value, name, handleChange }: defaultState) {
  return (
    <div>
      <div className="input-group mt-5"></div>
      <input
        className="form-control"
        value={value}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
}

export default InputFormik;
