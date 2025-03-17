import "./App.css";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskInput } from "./components/TaskInput/TaskInput";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskProvider } from "./providers/task.provider";

function App() {
  return (
    <TaskProvider>
      <h1>Gerenciador de Tarefas</h1>
      <TaskInput />
      <TaskFilter />
      <TaskList />
      <p>
        Aluno: <strong>Diogo Aparecido Marques Vieira</strong>
      </p>
      <p>
        RA: <strong>6116537</strong>
      </p>
    </TaskProvider>
  );
}

export default App;
