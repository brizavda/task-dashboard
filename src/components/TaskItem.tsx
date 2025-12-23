import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  const wasCompleted = useRef(task.completed);

  useEffect(() => {
    if (!wasCompleted.current && task.completed) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f43f5e", "#fb7185", "#fda4af"],
      });
    }

    wasCompleted.current = task.completed;
  }, [task.completed]);

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
