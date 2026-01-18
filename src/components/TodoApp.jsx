import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp(){
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    console.log("TodoApp component Loaded");
  }, []);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
        id: Date.now(),
        text,
        status: "incomplete"
    };
    setTodos([...todos,newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setTodos(todos.map(todo => todo.id === id ? {
        ...todo,status: newStatus}: todo)
);
};

return (
    <div className="todo-card"> 
        <h2 className="title">Todo App</h2>
        <TodoInput addTodo={addTodo} />
        <TodoList 
                 todos={todos}
                 removeTodo={removeTodo}
                 updateStatus={updateStatus}
        />
    </div>
);
}
