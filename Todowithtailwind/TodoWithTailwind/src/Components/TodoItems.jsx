import React, { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemsContext";

const TodoItems = () => {
  const {Todoitems,deleteTodo} = useContext(TodoItemContext);

  return (
    <>
      {Todoitems.length === 0 && <h1>Enjoy The Day</h1>}
      {Todoitems.map((todo,index) => {
        return (
          <div className="row" key={index}>
            <div className="col-sm-6">{todo.todoname}</div>
            <div className="col-sm-4">{todo.date}</div>
            <div className="col-sm-2">
              <button className="btn btn-danger" onClick={()=>deleteTodo(index)}>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoItems;
