import { AnimatePresence, motion } from "framer-motion";
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
    <motion.div layout className="space-y-3">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            layout
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <TaskItem
              task={task}
              onToggle={onToggleTask}
              onRemove={onRemoveTask}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default TaskList;
