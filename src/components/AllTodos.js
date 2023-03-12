import React, { createContext, useState } from "react";

import AddTodo from "./AddTodo";

import TodoItem from "./TodoItem";

import classes from "./AllTodos.module.css";

export const inputContext = createContext();

const AllTodos = () => {
  const [input, setInput] = useState("");
  const [elementToEdit, setElementToEdit] = useState(null);
  const [todoList, setTodoList] = useState([]);

  return (
    <div className={classes["all-todos-container"]}>
      <h2>My todos</h2>
      <inputContext.Provider
        value={{ input, setInput, elementToEdit, setElementToEdit }}
      >
        <AddTodo addTodoItem={setTodoList} currentTodoItems={todoList} />
        <div className={classes["todo-list"]}>
          {todoList.map((todoItem) => {
            const { todo, id } = todoItem;
            return (
              <TodoItem
                key={id}
                name={todo}
                id={id}
                currentTodoItems={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
        </div>
      </inputContext.Provider>
    </div>
  );
};

export default AllTodos;
