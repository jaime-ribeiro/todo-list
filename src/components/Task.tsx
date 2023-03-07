import styles from './Task.module.css';
import { Trash } from 'phosphor-react';
import { IToDo } from '../App';

interface IToDoProps {
    ToDo: IToDo;
    onCheckTask: (ToDoId: string) => void;
    onDeleteToDo: (toDoToDelete: IToDo) => void;
}

export function Task({ ToDo, onCheckTask, onDeleteToDo }: IToDoProps) {
    function handleDeleteToDo() {
        onDeleteToDo(ToDo);
    }
    return (
        <li className={styles.toDo}>
            <input
                type="checkbox"
                onClick={() => {
                    onCheckTask(ToDo.id)
                }}
            />
            <span
                className={ToDo.checked ? styles.toDoChecked : styles.toDoNotChecked}
            >
                {ToDo.name}
            </span>
            <button
                onClick={handleDeleteToDo}
            >
                <Trash size={20} />
            </button>
        </ li>
    )
}