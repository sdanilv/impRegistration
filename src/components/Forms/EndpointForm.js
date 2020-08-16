import { Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import {useEffect} from 'react';

const EndpointForm = ({setSubmitHandler}) => {
  const { handleSubmit, handleChange, values, submitForm } = useFormik({
    initialValues: {
      endpointName: "",
      endpointPrice: "",
      endpointCount: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(()=>{
    setSubmitHandler(()=>submitForm);
  },[])

  return (
    <form onSubmit={handleSubmit} >
      <Input
        name="endpointName"
        placeholder="Имя endpoint"
        value={values.endpointName}
        onChange={handleChange}
      />
      <Input
        prefix="₴"
        suffix="грн"
        name="endpointPrice"
        placeholder="Цена endpoint"
        value={values.endpointPrice}
        onChange={handleChange}
      />
      <Input
        suffix="шт"
        name="endpointCount"
        placeholder="Количество endpoint"
        value={values.endpointCount}
        onChange={handleChange}
      />
    </form>
  );
};

export default EndpointForm;
