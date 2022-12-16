import { ReactNode } from "react"
import styles from './NavTabs.module.scss';

interface NavTabsProps {
    children: ReactNode
}

export function NavTabs({ children }: NavTabsProps) {
    return (
        <div className={styles.navTabs}>
            {children}
        </div>
    )
}
