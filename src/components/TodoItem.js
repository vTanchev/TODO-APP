import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import classes from "./TodoItem.module.css";
import Button from "./UI/Button";

const TodoItem = ({ name, currentTodoItems, setTodoList }) => {
  const [checked, setChecked] = useState(false);

  const editHandler = () => {
    const currentEditItem = currentTodoItems.find((item) => item.todo === name);
    console.log(currentEditItem);
  };

  const deleteHandler = () => {
    console.log("Delete");
    setTodoList(currentTodoItems.filter((item) => item.todo !== name));
  };

  const checkedHandler = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className={classes["todo-item"]}>
      <div>
        <p style={{ color: checked ? "#1cfb1c" : "white" }}>{name}</p>
      </div>
      <div className={classes["btns"]}>
        <input
          className={classes["input-check"]}
          type={"checkbox"}
          checked={checked}
          onClick={checkedHandler}
          onChange={() => console.log("changed")}
        />
        <Button
          onEdit={editHandler}
          name={
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={classes["edit-svg"]}
              id="edit"
            />
          }
        ></Button>
        <Button
          onDelete={deleteHandler}
          name={
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes["delete-svg"]}
              id="delete"
            />
          }
        ></Button>
      </div>
    </div>
  );
};

export default TodoItem;
