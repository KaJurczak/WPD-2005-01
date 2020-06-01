import React from 'react';
import styles from './Shop.module.scss';
import ProductInShop from '../../features/ProductInShop/ProductInShop';

const Shop = () => (
  <div className={styles.component}>
    <ProductInShop />
  </div>
);

export default Shop;
