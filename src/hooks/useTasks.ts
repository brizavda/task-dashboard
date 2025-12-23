import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import type { Task } from "../types/task";


const STORAGE_KEY = "task-dashboard-tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load tasks from localStorage (solo una vez)
  useEffect(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks) as Task[]);
    }
    setIsInitialized(true);
  }, []);

  // Save tasks to localStorage (solo después de cargar)
  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, isInitialized]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((prev: Task[]) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev: Task[]) =>
        prev.map((task: Task) => {
        if (task.id === id) {
            // 🎉 Disparar confeti SOLO al completar
            if (!task.completed) {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#f43f5e", "#fb7185", "#fda4af"],
            });
            }

            return { ...task, completed: !task.completed };
        }
        return task;
        })
    );
  };

  const removeTask = (id: string) => {
    setTasks((prev: Task[]) =>
      prev.filter((task: Task) => task.id !== id)
    );
  };

  return {
    tasks,
    addTask,
    toggleTask,
    removeTask,
  };
}
