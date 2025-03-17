import styles from "./TaskFilter.module.css";
import { useTasks } from "../../providers/task.provider";

export const TaskFilter: React.FC = () => {
  const { setFilter } = useTasks();

  return (
    <div className={styles.container}>
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("completed")}>Concluídas</button>
      <button onClick={() => setFilter("pending")}>Pendentes</button>
    </div>
  );
};
