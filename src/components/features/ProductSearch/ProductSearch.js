import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ol className={styles.menu}>
        <li>
          <a href='#'>Select a category</a>
          <ul>
            <li>
              <a href='#'>BED</a>
              <ol>
                <li>
                  <a href='#'>SINGLE</a>
                </li>
                <li>
                  <a href='#'>KIDS</a>
                </li>
                <li>
                  <a href='#'>KINGSIZE</a>
                </li>
              </ol>
            </li>
            <li>
              <a href='#'>CHAIR</a>
              <ol>
                <li>
                  <a href='#'>KITCHEN</a>
                </li>
                <li>
                  <a href='#'>HOOKERS</a>
                </li>
                <li>
                  <a href='#'>STYLISH</a>
                </li>
                <li>
                  <a href='#'>ARMCHAIR</a>
                </li>
              </ol>
            </li>
            <li>
              <a href='#'>SOFA</a>
              <ol>
                <li>
                  <a href='#'>2-SEATS</a>
                </li>
                <li>
                  <a href='#'>3-SEATS</a>
                </li>
                <li>
                  <a href='#'>CORNERS</a>
                </li>
              </ol>
            </li>
            <li>
              <a href='#'>TABLE</a>
              <ol>
                <li>
                  <a href='#'>WOODEN</a>
                </li>
                <li>
                  <a href='#'>GLASS</a>
                </li>
                <li>
                  <a href='#'>ROUND</a>
                </li>
              </ol>
            </li>
            <li>
              <a href='#'>DINING</a>
              <ol>
                <li>
                  <a href='#'>LIGHT</a>
                </li>
                <li>
                  <a href='#'>CARPET</a>
                </li>
                <li>
                  <a href='#'>DECORATION</a>
                </li>
              </ol>
            </li>
          </ul>
        </li>
      </ol>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  
  children: PropTypes.node,
};

export default ProductSearch;
