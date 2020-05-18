import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <Link to='/' className={styles.active}>
                Home
              </Link>
            </li>
            <li>
              <Link to='products'>Furniture</Link>
            </li>
            <li>
              <Link to='products'>Chair</Link>
            </li>
            <li>
              <Link to='products'>Table</Link>
            </li>
            <li>
              <Link to='products'>Sofa</Link>
            </li>
            <li>
              <Link to='products'>Bedroom</Link>
            </li>
            <li>
              <Link to='products'>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
