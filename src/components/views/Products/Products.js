import React from 'react';
import styles from './Products.module.scss';

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
    </div>
  </div>
);

export default Products;
