import { Button, message } from "antd";
import React from "react";

const NavigationButton = ({ current, setCurrent, submitHandler }) => {
  const next = () => {
    setCurrent(current + 1);
    submitHandler();
  };
  const prev = () => setCurrent(current - 1);

  return (
    <div>
      {current < 6 ? (
        <Button type="submit" type="primary" onClick={next}>
          Next
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={() => message.success("Processing complete!")}
        >
          Done
        </Button>
      )}
      {!!current && (
        <Button style={{ margin: "0 8px" }} onClick={prev}>
          Previous
        </Button>
      )}
    </div>
  );
};

export default NavigationButton;
