import Clipboard from '../assets/clipboard.svg'
import styles from './Task.module.css';

export function Task() {
    return (
        <div className={styles.withoutTasks}>
            <header className={styles.headerTasks}>
                <div className={styles.createdTasks}>
                    <p>Tarefas criadas <span>0</span></p>
                </div>
                <div className={styles.concludedTasks}>
                    <p>Concluídas <span>0</span></p>
                </div>
            </header>
            <main>
                <img src={Clipboard}></img>
                <p>
                    <span>Você ainda não tem tarefas cadastradas</span>
                </p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </main>
        </div >
    )
}