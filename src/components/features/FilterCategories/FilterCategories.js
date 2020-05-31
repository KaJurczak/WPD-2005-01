import React from 'react';
import styles from './FilterCategories.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const FilterCategories = () => {
  const listElement = (categorie, number, active) => (
    <li
      className={`${styles.categoriesItem} ${
        active === 'active' ? styles.categoriesActive : '' + styles.categoriesItem
      }`}
    >
      <a href='#' className={`${styles.categoriesInner}`}>
        <FontAwesomeIcon className={`${styles.icon}`} icon={faAngleRight} />
        <div className={`${styles.categoriesSubtitle}`}>{categorie}</div>
        <div className={styles.categoriesNumber}>{number}</div>
      </a>
    </li>
  );

  return (
    <div className={styles.categoriesFilter}>
      <div className={styles.categoriesTitle}>
        <h5>FILTER BY CATEGORIES</h5>
      </div>
      <ul>
        {listElement('Furniture', 3, 'active')}
        {listElement('Sofa', 4)}
        {listElement('Chair', 5)}
        {listElement('Table', 5)}
        {listElement('Bedroom', 5)}
        {listElement('Furniture', 5)}
      </ul>
    </div>
  );
};

export default FilterCategories;
