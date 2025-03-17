import styles from "./TaskList.module.css";
import { useTasks } from "../../providers/task.provider";

export const TaskList: React.FC = () => {
  const { tasks, toggleTask, filter } = useTasks();
  const filteredTasks = tasks.filter(
    (task) =>
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed)
  );

  return (
    <ul className={styles.ul}>
      {filteredTasks.map((task) => (
        <li className={styles.li} key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.text}
        </li>
      ))}
    </ul>
  );
};
