import styles from '../styles/Home.module.scss';

export default function Home() {
  const generateColor = () => {
  }

  return (
    <div id="color" className={styles.wrapper}>
      <button
        className={styles.roll}
        onClick={generateColor}
      >
        Roll
      </button>
    </div>
  )
}
