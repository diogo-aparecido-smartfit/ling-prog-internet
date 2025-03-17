import { useState } from "react";
import styles from "./TaskInput.module.css";
import { useTasks } from "../../providers/task.provider";

export const TaskInput: React.FC = () => {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text.trim() !== "") {
      addTask(text);
      setText("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>
    </div>
  );
};
