import React from 'react';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row align-items-center ${styles.wrapper}`}>
          <Button className={styles.button}>
            <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
          </Button>

          <div className={`row col ${styles.brands}`}>
            <div className={`col ${styles.image}`}>
              <img src='https://pics.tinypic.pl/i/01006/u3zvh8bu88b4.png' alt=''></img>
            </div>
            <div className={`col ${styles.image}`}>
              <img src='https://pics.tinypic.pl/i/01006/u3zvh8bu88b4.png' alt=''></img>
            </div>
            <div className={`col ${styles.image}`}>
              <img src='https://pics.tinypic.pl/i/01006/u3zvh8bu88b4.png' alt=''></img>
            </div>
            <div className={`col ${styles.image}`}>
              <img src='https://pics.tinypic.pl/i/01006/u3zvh8bu88b4.png' alt=''></img>
            </div>
            <div className={`col ${styles.image}`}>
              <img src='https://pics.tinypic.pl/i/01006/u3zvh8bu88b4.png' alt=''></img>
            </div>
            <div className={`col ${styles.image}`}>
              <img src='https://pics.tinypic.pl/i/01006/u3zvh8bu88b4.png' alt=''></img>
            </div>
          </div>

          <Button className={styles.button}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Brands;
