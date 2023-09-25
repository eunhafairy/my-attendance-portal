import React from "react";
import PropTypes from "prop-types";

export const Form = (props) => {
  const { method = "POST", action = "#", children } = props;

  return (
    <form className="space-y-6" action={action} method={method}>
      {children}
    </form>
  );
};

Form.propTypes = {
  method: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
