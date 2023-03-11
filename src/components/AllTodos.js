import React, { useState, useEffect } from "react";

import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import classes from "./AllTodos.module.css";

const AllTodos = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className={classes["all-todos-container"]}>
      <h2>My todos</h2>
      <AddTodo addTodoItem={setTodoList} currentTodoItems={todoList} />
      <div className={classes["todo-list"]}>
        {todoList.map((todoItem) => {
          const { todo, id } = todoItem;
          return (
            <TodoItem
              key={id}
              name={todo}
              currentTodoItems={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllTodos;
