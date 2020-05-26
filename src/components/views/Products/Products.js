import React from 'react';
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  const listElement = (categorie, number) => (
    <li className={styles.categoriesItem}>
      <a href='#' className={`${styles.categoriesInner}`}>
        <FontAwesomeIcon className={`${styles.icon}`} icon={faAngleRight} />
        <div className={`${styles.categoriesSubtitle}`}>{categorie}</div>
        <div className={styles.categoriesNumber}>{number}</div>
      </a>
    </li>
  );
  const listElementActive = (categorie, number) => (
    <li className={`${styles.categoriesItem} ${styles.categoriesActive}`}>
      <a href='#' className={styles.categoriesInner}>
        <FontAwesomeIcon className={`${styles.icon}`} icon={faAngleRight} />
        <div className={`${styles.categoriesSubtitle}`}>{categorie}</div>
        <div className={styles.categoriesNumber}>{number}</div>
      </a>
    </li>
  );

  return (
    <div className={styles.root}>
      <div className={'container'}>
        <div className={styles.baner}>
          <h1 className={styles.banerTitle}>
            BEDROOM <b>FURNITURE</b>
          </h1>
          <h3 className={styles.banerSubtitle}>
            &nbsp;ALWAYS <a> 25% </a> OFF OR MORE
          </h3>
        </div>

        <div className={styles.pageMenu}>
          <a href='#'>
            Home
            <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
          </a>
          <a href='#' className={styles.pageActive}>
            Furniture
          </a>
        </div>

        <div className={`row ${styles.columnWrapper}`}>
          <div className={`col-12 col-sm-9 ${styles.columnFurniture}`}>
            TEST COLUMN FURNITURE TEST COLUMN FURNITURE TEST COLUMN FURNITURE TEST
            COLUMN FURNITURE TEST COLUMN FURNITURE TEST COLUMN FURNITURE TEST COLUMN
            FURNITURE
          </div>
          <div className={`col-12 col-sm-3 ${styles.columnFilter}`}>
            <div className={styles.categoriesFilter}>
              <div className={styles.categoriesTitle}>
                <h5>FILTER BY CATEGORIES</h5>
              </div>
              <ul>
                {listElementActive('Furniture', 3)}
                {listElement('Sofa', 4)}
                {listElement('Chair', 5)}
                {listElement('Table', 5)}
                {listElement('Bedroom', 5)}
                {listElement('Furniture', 5)}
              </ul>
            </div>
            TEST COLUMN FILTER TEST COLUMN FILTER TEST COLUMN FILTER TEST COLUMN FILTER
            TEST COLUMN FILTER TEST COLUMN FILTER TEST COLUMN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
