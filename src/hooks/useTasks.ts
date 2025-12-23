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
      prev.map((task: Task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
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
