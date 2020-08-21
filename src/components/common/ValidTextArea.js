import React from "react";
import { Form, Input } from "antd";

const ValidTextArea = ({
  formik,
  label,
  placeholder,
  name,
  ...otherParams
}) => (
  <Form.Item
    label={label}
    help={formik.touched[name] && formik.errors[name]}
    validateStatus={formik.errors[name] && formik.touched[name] && "error"}
  >
    <Input.TextArea
      autoSize
      onBlur={() => formik.setFieldTouched(name)}
      name={name}
      placeholder={placeholder}
      value={formik.values[name]}
      onChange={formik.handleChange}
      {...otherParams}
    />
  </Form.Item>
);

export default ValidTextArea;
