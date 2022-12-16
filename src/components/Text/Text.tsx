import styles from './Text.module.scss';

interface TextProps {
  message: string
}

export function Text({ message }: TextProps) {
  return (
    <span className={styles.text}>{message}</span>
  )
}
