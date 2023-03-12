import React, { useState, useContext } from "react";

import { inputContext } from "./AllTodos";

import classes from "./AddTodo.module.css";

const AddTodo = ({ addTodoItem, currentTodoItems }) => {
  const [error, setError] = useState("");

  const { input, setInput, elementToEdit, setElementToEdit } =
    useContext(inputContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (input === "") {
      setError("Please add valid todo!");
      return;
    }

    if (elementToEdit) {
      const updatedTodos = currentTodoItems.map((item) =>
        item.id === elementToEdit.id ? { ...item, todo: input } : item
      );

      addTodoItem(updatedTodos);
      setElementToEdit(null);
    } else {
      addTodoItem([...currentTodoItems, { todo: input, id: Math.random() }]);
    }

    setError("");
    setInput("");
  };
  console.log(currentTodoItems);

  return (
    <>
      <form onSubmit={submitHandler} className={classes["form-todo"]}>
        <input
          type={"text"}
          placeholder={"Add todo"}
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button type="submit" className={classes["submit-btn"]}>
          {elementToEdit ? "Edit task" : "Add new task"}
        </button>
      </form>
      <div className={classes["error"]}>
        {error ? <p className="error">{error}</p> : ""}
      </div>
    </>
  );
};

export default AddTodo;
