import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDelete = (id) => {
    const temp = [...todos];
    temp.splice(id, 1);
    setTodos(temp);
  };

  const handleEdit = (id) => {
    setEditIndex(id);
    setNewTodo(todos[id]);
  };

  const handleUpdate = () => {
    const temp = [...todos];
    temp[editIndex] = newTodo;
    setTodos(temp);
    setNewTodo("");
    setEditIndex(-1);
  };

  return (
    <div className="App">
      <h3>TodoList</h3>

      <input
        type="text"
        placeholder="Enter todo"
        value={newTodo}
        onChange={handleTodo}
      />
      <button onClick={addTodo}>Add</button>

      <div>
        {todos.map((task, i) => (
          <div key={i} className="task">
            {editIndex === i ? (
              <input
                type="text"
                value={newTodo}
                onChange={handleTodo}
                autoFocus
              />
            ) : (
              <span>{task}</span>
            )}
            <button onClick={() => handleDelete(i)}>Delete</button>
            {editIndex === i ? (
              <button onClick={handleUpdate}>Update</button>
            ) : (
              <button onClick={() => handleEdit(i)}>Edit</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
