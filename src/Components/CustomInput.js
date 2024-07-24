import { useField } from "formik";
import React, { Fragment } from "react";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />
      {meta.error && <div className="error">{meta.error}</div>}
    </Fragment>
  );
}

export default CustomInput;
