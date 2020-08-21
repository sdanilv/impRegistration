import { Button, message } from "antd";
import React from "react";

const NavigationButton = ({ pageNumber, submitHandler, prevPage }) => {
  return (
    <div>
      {pageNumber < 6 ? (
        <Button type="primary" onClick={submitHandler}>
          Далее
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={() => message.success("Processing complete!")}
        >
          Готово
        </Button>
      )}
      {!!pageNumber && (
        <Button style={{ margin: "0 8px" }} onClick={() => prevPage()}>
          Назад
        </Button>
      )}
    </div>
  );
};

export default NavigationButton;
