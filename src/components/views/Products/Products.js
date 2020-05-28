import React from 'react';
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ColorProductFilter from '../../features/ColorProductFilter/ColorProductFilter';

const Products = () => (
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
          TEST COLUMN FURNITURE TEST COLUMN FURNITURE TEST COLUMN FURNITURE TEST COLUMN
          FURNITURE TEST COLUMN FURNITURE TEST COLUMN FURNITURE TEST COLUMN FURNITURE
        </div>
        <div className={`col-12 col-sm-3 ${styles.columnFilter}`}>
          <ColorProductFilter />
        </div>
      </div>
    </div>
  </div>
);

export default Products;
