import React from 'react';
import styles from './ColorProductFilter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

const element = (color, classListElement, classColor) => (
  <li className={classListElement}>
    <div className={classColor}>
      <FontAwesomeIcon className={`${styles.icon}`} icon={faSquare} />
    </div>
    <div className={styles.colorName}>{color}</div>
  </li>
);

const ColorProductFilter = () => {
  return (
    <div className={styles.component}>
      <div className={styles.title}>FILTER BY COLOR</div>
      <div className={styles.filters}>
        <ul className={styles.listWrapper}>
          {element('Red', styles.listItemActive, styles.iconRed)}
          {element('Black', styles.listItem, styles.iconBlack)}
          {element('Yellow', styles.listItem, styles.iconYellow)}
          {element('Blue', styles.listItem, styles.iconBlue)}
          {element('Pink', styles.listItem, styles.iconPink)}
          {element('Green', styles.listItem, styles.iconGreen)}
        </ul>
      </div>
    </div>
  );
};

export default ColorProductFilter;
