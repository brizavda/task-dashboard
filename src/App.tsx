import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, addTask } = useTasks();

  return (
    <div className="p-6">
      <button
        onClick={() => addTask("My first task")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>

      <pre className="mt-4">{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}

export default App;
