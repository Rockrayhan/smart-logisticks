import React, { useState } from "react";

const Step2 = ({ currentStep, nextStep, previousStep }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Step 2</h1>

<div className="d-flex gap-5 justify-content-between">

        {todos.map((todo, index) => (
          <div className="d-flex" key={index}>
            {todo}
            <button className="h-50" onClick={() => handleDeleteTodo(index)}>X</button>
          </div>
        ))}
      

        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      
</div>
      <button onClick={previousStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
