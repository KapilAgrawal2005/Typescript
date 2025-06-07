import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { type Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos([...todos, { id, text }]);
  };

  const removeTodoHandler = (id: string) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };
  return (
    <main className="w-full h-full">
      <div className="flex flex-col items-center mt-24">
        <AddTodo onAddTodo={addTodoHandler} />
        <TodoList items={todos} onDeleteTodo={removeTodoHandler} />
      </div>
    </main>
  );
}

export default App;
