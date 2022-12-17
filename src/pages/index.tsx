import { useLayoutEffect, useState } from 'react';
import { Shuffle, Equalizer } from 'phosphor-react';
import styles from '../styles/Home.module.scss';

import { Text } from '../components/Text/Text';
import { Button } from '../components/Button/Button';
import { NavTabs } from '../components/NavTabs/NavTabs';
import { clearTimeout } from 'timers';

export default function Home() {
  const [hex, setHex] = useState<string>('');
  const [party, setParty] = useState<boolean>(false);

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

  useLayoutEffect(() => {
    if (party) {
      const interval = setInterval(() => {
        generateColor();
      }, 100);

      return () => clearInterval(interval);
    }
  }, [party]);

  return (
    <div id="color" className={styles.wrapper}>

      <NavTabs>
        <Button onClick={() => setParty(!party)}>
          <Equalizer size={24} />
        </Button>

        <Button onClick={generateColor}>
          <Shuffle size={24} />
        </Button>
      </NavTabs>

      <Text message={hex} />
    </div>
  )
}
