import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg mb-3">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4"
        />

        <span
          className={`${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.title}
        </span>
      </label>

      <button
        onClick={() => onRemove(task.id)}
        className="text-sm text-red-500 hover:text-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
