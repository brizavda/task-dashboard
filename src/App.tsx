import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>

      <TaskInput onAddTask={addTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onRemoveTask={removeTask}
      />
    </div>
  );
}

export default App;
