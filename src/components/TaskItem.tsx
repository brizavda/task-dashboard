import { motion } from "framer-motion";
import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  return (
    <motion.div
      layout
      animate={{ opacity: task.completed ? 0.8 : 1 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between p-4 border rounded-lg"
    >
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 accent-rose-500"
        />

        <motion.span
          layout
          initial={false}
          animate={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#9ca3af" : "#1f2937",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-sm"
        >
          {task.title}
        </motion.span>
      </label>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onRemove(task.id)}
        className="text-sm text-rose-500 hover:text-rose-600"
      >
        Delete
      </motion.button>
    </motion.div>
  );
}

export default TaskItem;
