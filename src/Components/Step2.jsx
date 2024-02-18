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

<div className="grid lg:grid-cols-4 gap-5">

        {todos.map((todo, index) => (
          <div className="flex" key={index}>
            <div className="h-20 w-20 bg-slate-400 hover:bg-teal-500">{todo}</div>
            <button className="bg-red-500 h-20 w-5" onClick={() => handleDeleteTodo(index)}>X</button>
          </div>
        ))}
      

<div className="">
<input
        className="h-20 w-20"
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button  onClick={handleAddTodo}>Add Item</button>
</div>
      
</div>      

      <button type="button" onClick={previousStep} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Previous</button>

      <button type="button" onClick={nextStep} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Next</button>
    </div>
  );
};

export default Step2;
