import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import { Task } from './components/Task';

export function App() {

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.addTaskLine}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">
            Criar
            <PlusCircle size={24} />
          </button>
        </form>
        <Task />
      </main>
    </div>
  )
}


