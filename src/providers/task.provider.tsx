import { createContext, useCallback, useContext, useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  filter: string;
  setFilter: (filter: string) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const addTask = useCallback(
    (text: string) => {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    },
    [tasks]
  );

  const toggleTask = useCallback(
    (id: number) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [tasks]
  );

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, filter, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};
