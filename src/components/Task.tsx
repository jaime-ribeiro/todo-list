import styles from './Task.module.css';
import { Trash } from 'phosphor-react';
import { IToDo } from '../App';
interface IToDoProps {
    ToDo: IToDo;
}

export function Task({ ToDo }: IToDoProps) {
    return (
        <li className={styles.toDo}>
            <input
                type="radio"
            />
            <span>
                {ToDo.name}
            </span>
            <button>
                <Trash size={20} />
            </button>
        </ li>
    )
}