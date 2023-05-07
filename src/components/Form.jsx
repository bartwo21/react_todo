import React from "react";
import FormList from "./FormList";
import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem === "") {
      toast.error("Lütfen todo giriniz.");
      return;
    } else if (todoList.includes(todoItem)) {
      toast.error("Bu todo zaten var.");
      return;
    } else if (todoItem.length < 3) {
      toast.error("Todo en az 3 karakter olmalıdır.");
      return;
    } else if (todoItem.length > 30) {
      toast.error("Todo en fazla 30 karakter olmalıdır.");
      return;
    } else if (todoList.length > 6) {
      toast.error("En fazla 6 todo ekleyebilirsiniz.");
    } else {
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: todoItem,
        isEditing: false,
      };

      setTodoList((oldItems) => [...oldItems, item]);
      toast.dark("Todo başarıyla eklendi.");
      setTodoItem("");
    }
  };

  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  return (
    <div className="container">
      <h1>Todo Uygulaması</h1>
      <form>
        <input
          className="form-input"
          type="text"
          placeholder="Todo giriniz..."
          onChange={(e) => setTodoItem(e.target.value)}
          value={todoItem}
        />
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Ekle
        </button>
      </form>
      <FormList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Form;
