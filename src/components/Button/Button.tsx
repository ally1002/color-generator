import { ButtonHTMLAttributes } from "react";
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    )
}
