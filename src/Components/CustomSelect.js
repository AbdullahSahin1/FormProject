import { useField } from "formik";
import React, { Fragment } from "react";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />
      {meta.error && <div className="error">{meta.error}</div>}
    </Fragment>
  );
}

export default CustomSelect;

