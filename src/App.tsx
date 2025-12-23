import TaskInput from "./components/TaskInput";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, addTask } = useTasks();

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>

      <TaskInput onAddTask={addTask} />

      <pre className="mt-6 bg-gray-100 p-4 rounded">
        {JSON.stringify(tasks, null, 2)}
      </pre>
    </div>
  );
}

export default App;
