import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface IToDo {
    uuid?: String;
    name: String;
    checked?: boolean;
}

export function Task({ name }: IToDo) {
    return (
        <li className={styles.toDo}>
            <input
                type="radio"
            />
            <span>
                {name}
            </span>
            <button>
                <Trash size={20} />
            </button>
        </ li>
    )
}