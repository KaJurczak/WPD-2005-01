import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row align-items-center ${styles.wrapper}`}>
        <div className={`col ${styles.search}`}>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <a href='#' className={styles.menuIcon}>
            <FontAwesomeIcon className={styles.icon} icon={faBars} />
            <ul className={styles.smallMenu}>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </a>
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
