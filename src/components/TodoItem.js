import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { inputContext } from "./AllTodos";
import Button from "./UI/Button";

import classes from "./TodoItem.module.css";

const TodoItem = ({ name, id, currentTodoItems, setTodoList }) => {
  const [checked, setChecked] = useState(false);

  const { input, setInput, elementToEdit, setElementToEdit } =
    useContext(inputContext);

  const editHandler = () => {
    const currentEditItem = currentTodoItems.find((item) => item.todo === name);
    setElementToEdit(currentEditItem);
    setInput(currentEditItem.todo);
  };

  const deleteHandler = () => {
    setTodoList(currentTodoItems.filter((item) => item.id !== id));
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
          onChange={(checked) => !checked}
          onClick={checkedHandler}
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
