import React from 'react';

import styles from './AdBox.module.scss';

import Button from '../Button/Button';

const AdBox = () => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img
        src={'https://i.postimg.cc/pdjgVPd2/lounge-chair-a-ottoman-xl-49289-1-b.jpg'}
        alt={'chair-8'}
      />

      <div className={styles.content}>
        <span>
          From <h2>$1550.80</h2>
        </span>
        <span>
          <h3>Lounge Chair</h3>
        </span>
        <Button variant='main'>Shop now</Button>
      </div>
    </div>
  </div>
);

export default AdBox;
