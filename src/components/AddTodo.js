import React, { useState, useContext } from "react";

import TodoItem from "./TodoItem";

import classes from "./AddTodo.module.css";

const AddTodo = ({ addTodoItem, currentTodoItems }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const itemCtx = useContext(TodoItem);
  console.log(itemCtx);

  const submitHandler = (e) => {
    e.preventDefault();

    if (input === "") {
      setError("Please add valid todo!");
      return;
    }

    setError("");
    setInput("");

    addTodoItem([...currentTodoItems, { todo: input, id: Math.random() }]);
  };

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
          Add new task
        </button>
      </form>
      <div className={classes["error"]}>
        {error ? <p className="error">{error}</p> : ""}
      </div>
    </>
  );
};

export default AddTodo;
