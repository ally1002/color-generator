import { useLayoutEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';

import { Text } from '../components/Text/Text';

export default function Home() {
  const [hex, setHex] = useState<string>('');

  const generateColor = () => {
    const digits: string = '0123456789ABCDEF';
    let hex: string = '#';

    for (let i = 0; i < 6; i++) {
      hex += digits.charAt(Math.floor(Math.random() * 16));
    }

    setHex(hex);
  }

  useLayoutEffect(() => {
    generateColor();
  }, []);

  useLayoutEffect(() => {
    document.getElementById("color").style.background = hex;
  }, [hex]);

  return (
    <div id="color" className={styles.wrapper}>
      <Text message={hex} />
      {/* <button
        className={styles.roll}
        onClick={generateColor}
      >
        Roll
      </button> */}
    </div>
  )
}
