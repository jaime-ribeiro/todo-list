import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import Clipboard from './assets/clipboard.svg'
import { Task } from './components/Task';

interface IToDo {
  id: number;
  name: String;
  checked: Boolean;
}

export function App() {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [newToDoName, setNewToDoName] = useState("")


  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();

    const newToDo = {
      id: 1,
      name: newToDoName,
      checked: false,
    }

    setToDos([...toDos, newToDo]);
    setNewToDoName("");
  }

  function handleNewToDoInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewToDoName(event.target.value);
  }
  return (
    < div >
      <Header />
      <main className={styles.wrapper}>
        <form
          className={styles.addTaskLine}
          onSubmit={handleCreateNewToDo}
        >
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewToDoInputChange}
            value={newToDoName}
          />
          <button type="submit">
            Criar
            <PlusCircle size={24} />
          </button>
        </form>
        <div className={styles.Tasks}>
          <header className={styles.headerTasks}>
            <div className={styles.createdTasks}>
              <p>Tarefas criadas <span>0</span></p>
            </div>
            <div className={styles.concludedTasks}>
              <p>Concluídas <span>0</span></p>
            </div>
          </header>
          <div className={styles.withoutTask}>
            <img src={Clipboard}></img>
            <p>
              <span>Você ainda não tem tarefas cadastradas</span>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div >
        <ul>
          {toDos.map(toDo => {
            return (
              <Task
                name={toDo.name}
              />
            )
          })}
        </ul>
      </main>
    </div >
  )
}


