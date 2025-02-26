import React, { useState } from "react";
import Component from "./component";

function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeList = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeList(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <Component />
    </div>
  );
}

export default App;
