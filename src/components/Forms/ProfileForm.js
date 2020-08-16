import { Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import {useEffect} from 'react';
const { TextArea } = Input;
const ProfileForm = ({setSubmitHandler}) => {
  const { handleSubmit, handleChange, values, submitForm } = useFormik({
    initialValues: {
      address: "",
      site: "",
      name: "",
      telephone: "",
      birthday: "",
      INN: "",
      postIndex: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(()=>{
    setSubmitHandler(()=>submitForm);
  },[])


  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="address"
        placeholder="Адрес проживания"
        value={values.address}
        onChange={handleChange}
      />
      <Input
        name="site"
        placeholder="Имя сервиса"
        value={values.site}
        onChange={handleChange}
      />
      <Input
        name="name"
        placeholder="Имя сервиса"
        value={values.name}
        onChange={handleChange}
      />
      <Input
        name="telephone"
        placeholder="Имя сервиса"
        value={values.telephone}
        onChange={handleChange}
      />
      <Input
        name="birthday"
        placeholder="Имя сервиса"
        value={values.birthday}
        onChange={handleChange}
      />
      <Input
        name="INN"
        placeholder="Имя сервиса"
        value={values.INN}
        onChange={handleChange}
      /> <Input
        name="postIndex"
        placeholder="Имя сервиса"
        value={values.postIndex}
        onChange={handleChange}
      />
    </form>
  );
};
export default ProfileForm;
