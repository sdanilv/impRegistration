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

const Registration = ({prevPage, pageNumber, ...formsEvent }) => {
  const [submitHandler, setSubmitHandler] = useState(null);

  return (
    <>
      <RegistrSteps pageNumber={pageNumber} />
      <div style={style}>
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

const style = {
  margin: "auto",
  marginTop: 10,

  height: "50%",
  width: "500px",
};

const mstp = (state) => (
state
);
export default connect(mstp, {
  setService,
  setEndpoint,
  setEmail,
  setPersonal,
  prevPage,
})(Registration);
