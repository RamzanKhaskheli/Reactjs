import { useState } from "react";
import Addtodo from "./Components/Addtodo";
import TodoItems from "./Components/TodoItems";
import { TodoItemContext } from "./store/TodoItemsContext";

function App() {
  const [Todoitems, setTodoitems] = useState([]);

  const addnewItem = (newTodo, todoDate) => {
    const newTodos = { todoname: newTodo, date: todoDate };
    setTodoitems([...Todoitems, newTodos]);
  };

  const deleteTodo = (index) => {
    const newTodoitem = Todoitems.filter((item, ind) => {
      ind !== index;
    });

    setTodoitems([newTodoitem])
  };

  return (
    <TodoItemContext.Provider value={{ Todoitems, addnewItem, deleteTodo }}>
      <center>
        <h1>Todo App</h1>
        <div className="container text-center">
          <Addtodo />
          <TodoItems />
        </div>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
