import { useState } from "react";
import TaskFilters from "./components/TaskFilters";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";
import type { TaskFilter } from "./types/filter";

function App() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const [filter, setFilter] = useState<TaskFilter>("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>

      <TaskInput onAddTask={addTask} />

      <TaskFilters activeFilter={filter} onChange={setFilter} />

      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onRemoveTask={removeTask}
      />
    </div>
  );
}

export default App;
