import React, { useContext, useState } from "react";
import { TodoItemContext } from "../store/TodoItemsContext";
const Addtodo = () => {
  const { addnewItem } = useContext(TodoItemContext);
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handlesubmitebtn = () => {
    addnewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <input
          type="text"
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
          placeholder="Enter Todos"
        />
      </div>
      <div className="col-sm-4">
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => {
            setTodoDate(e.target.value);
          }}
        />
      </div>
      <div className="col-sm-2">
        <button className="btn btn-success" onClick={handlesubmitebtn}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Addtodo;
