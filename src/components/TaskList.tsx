import type { Task } from "../types/task";
import EmptyState from "./EmptyState";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

function TaskList({ tasks, onToggleTask, onRemoveTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <EmptyState message="You're all done ✨ No tasks match this filter." />
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
