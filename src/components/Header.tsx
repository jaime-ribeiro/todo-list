import styles from './Header.module.css'

import rocketlogo from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketlogo} ></img>
        </header >



    );
}