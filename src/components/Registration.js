import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import RegistrSteps from "./RegistrSteps";
import Switch from "./Switch";
import { connect } from "react-redux";
import {
  prevPage,
  setEmail,
  setEndpoint,
  setPersonal,
  setService,
} from "../redux/reducer";
import style from "./Registration.module.css";

const Registration = ({ prevPage, pageNumber, ...formsEvent }) => {
  const [submitHandler, setSubmitHandler] = useState(null);

  return (
    <>
      <RegistrSteps pageNumber={pageNumber} />
      <div className={style.form}>
        <Switch
          {...formsEvent}
          setSubmitHandler={setSubmitHandler}
          pageNumber={pageNumber}
        />
      </div>
      <NavigationButton
        prevPage={prevPage}
        submitHandler={submitHandler}
        pageNumber={pageNumber}
      />
    </>
  );
};

const mstp = (state) => state;
export default connect(mstp, {
  setService,
  setEndpoint,
  setEmail,
  setPersonal,
  prevPage,
})(Registration);
