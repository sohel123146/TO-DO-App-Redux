import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todoSlice"; //importing addTodo function from redux
import Todoitem from "./todoItem";

const Addtodo = () => {
    // eslint-disable-next-line no-unused-vars
  const [text,setText] = useState('')
  const todo = useSelector((state) => state.todo.value); //getting (todo reducer) todo from store.js
  const dispatch = useDispatch();

  const handleAddtodo = (e) => {
    e.preventDefault();
    if (text.trim()) {
        dispatch(addTodo(text));
        setText('');
      }
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center my-3">
        <h1 style={{ color: "white", marginTop: "10px" }}>Get Things Done!!</h1>
      </div>

      <div className="d-flex align-items-center justify-content-center my-3">
        <form className="d-flex" onSubmit={handleAddtodo}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Add Item..."
            onChange={(e)=>setText(e.target.value)}
            value={text}
          />
          <button
            type="submit"
            className="btn btn-primary"
            
          >
            Add
          </button>
        </form>
      </div>
      <div className="d-flex align-items-center justify-content-center my-3">
        <ul className="list-group">
          {todo.map((todo) => (
            <Todoitem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Addtodo;
