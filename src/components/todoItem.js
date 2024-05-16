import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../redux/todo/todoSlice";

const Todoitem = ({todo}) => {
    // const todo = useSelector((state) => state.todo.value);
    const dispatch = useDispatch()
  
    const handleDelete = () =>{
        dispatch(deleteTodo(todo.id))
    }

    const handleToggle = () =>{
        dispatch(toggleTodo(todo.id))
    }
  
    const handleEdit = () => {
        const newText = prompt("Edit todo", todo.text);
        if(newText !== null && newText.trim() !== ''){
            dispatch(editTodo({
                id : todo.id,
                text : newText,
            }));
        }
    }
  

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div style={{ color: "white" }} className="todo-items d-flex ">
        <h4 style={{textDecoration : todo.completed ? 'line-through' : 'none'}} onClick={handleToggle}>{todo.text}</h4>
        <div className="buttons d-flex">
          <FontAwesomeIcon
            className="icon mx-2"
            icon={faTrash}
            onClick={handleDelete}
          />
          <FontAwesomeIcon className="icon" icon={faEdit} onClick={handleEdit}/>
        </div>
      </div>
    </div>
  );
};
export default Todoitem;
