import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import Clipboard from './assets/clipboard.svg'
import { Task } from './components/Task';

export interface IToDo {
  id: string;
  name: string;
  checked: boolean;
}

export function App() {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [newToDoName, setNewToDoName] = useState("");
  const [toDosLenght, setToDosLength] = useState(0);

  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();

    const newToDo = {
      id: uuidv4(),
      name: newToDoName,
      checked: false,
    }

    setToDos([...toDos, newToDo]);
    setNewToDoName("");
    setToDosLength(prevLength => prevLength + 1);
  }

  function handleNewToDoInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewToDoName(event.target.value);
  }

  function onCheckTask(ToDoId: string) {
    const newToDoList = toDos.map(todo => {
      if (ToDoId === todo.id) return {
        ...todo, checked: !todo.checked
      }

      return todo
    })

    setToDos(newToDoList);
  }

  function deleteToDo(toDoToDelete: IToDo) {
    const toDosWithoutDeleted = toDos.filter(todo => {
      return todo !== toDoToDelete;
    })

    setToDos(toDosWithoutDeleted);
    setToDosLength(prevLength => prevLength - 1);
  }

  const toDosConcludedCount = toDos.filter(todo => todo.checked).length;
  //Pelo fato da variável estar associado a um toDos e o seu estado mudar, atualiza todas as variáveis associadas a ela, por isso nesse caso o handle não foi necessário
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
              <p>Tarefas criadas <span>{toDosLenght}</span></p>
            </div>
            <div className={styles.concludedTasks}>
              <p>Concluídas <span>{toDosLenght === 0 ? 0 : `${toDosConcludedCount} de ${toDosLenght}`}</span></p>
            </div>
          </header>
          {toDosLenght > 0 ? null :
            (
              <div className={styles.withoutTask}>
                <img src={Clipboard}></img>
                <p>
                  <span>Você ainda não tem tarefas cadastradas</span>
                </p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )}
        </div >
        <ul>
          {toDos.map(toDo => {
            return (
              <Task
                key={toDo.id}
                ToDo={toDo}
                onCheckTask={onCheckTask}
                onDeleteToDo={deleteToDo}
              />
            )
          })}
        </ul>
      </main>
    </div >
  )
}

