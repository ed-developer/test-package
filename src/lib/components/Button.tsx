import React from "react";

interface IButton {
  label: string;
}

const Button = ({ label }: IButton) => {
  return <button>{label}</button>;
};

Button.defaultProps = {
  label: "Default label",
};

export default Button;
