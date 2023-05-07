import React from "react";
import { AiFillDelete } from "react-icons/ai";

import { toast } from "react-toastify";

const FormList = ({ setTodoList, todoList }) => {
  const handleDelete = (id) => {
    const newArray = todoList.filter((todo) => todo.id !== id);
    setTodoList(newArray);
    toast.warn("Todo başarıyla silindi.");
  };

  return (
    <div className="form-list">
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.value}
            <div className="buttons">
              <button
                className="delete-btn"
                onClick={() => handleDelete(todo.id)}
              >
                <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
