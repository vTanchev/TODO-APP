import React from "react";

import classes from "./Button.module.css";

const Button = ({ name, onEdit, onDelete }) => {
  const editHandler = onEdit;
  const deleteHandler = onDelete;

  return (
    <button
      onClick={name.props.id === "edit" ? editHandler : deleteHandler}
      className={classes["btn"]}
    >
      {name}
    </button>
  );
};
export default Button;
