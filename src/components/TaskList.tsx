import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

function TaskList({ tasks, onToggleTask, onRemoveTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        No tasks yet. Add one above 👆
      </p>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onRemove={onRemoveTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
