import React, { useState } from "react";
import Todo from "./Todo";

const initialTodos = [
  {
    title: "Todo #1",
    description: "Desc del Todo #1",
    completed: false,
  },
  {
    title: "Todo #2",
    description: "Desc del Todo #2",
    completed: true,
  },
];

const TodoList = () => {

  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      <h1 className="text-right">Soy TodoList</h1>
      {todos.map((todo) => (
        <Todo todo={todo}/>
      ))}
    </div>
  );
};

export default TodoList;
