import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoToogleComplete }) => {
  return (
    <div>
      <h1 className="text-right">Soy TodoList</h1>
      {todos.map((todo) => (
        <Todo 
        todo={todo} 
        key={todo.id} 
        todoDelete={todoDelete} 
        todoToogleComplete={todoToogleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
