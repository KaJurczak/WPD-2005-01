import React from 'react';
import styles from './LeftColumn.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';

import ProductInColumn from './ProductInColumn';
class LeftColumn extends React.Component {
  state = {
    products: { ...this.props.products },
    sortMenu: [
      { id: 0, value: 'Price: lowest first' },
      { id: 1, value: 'Price: highest first' },
    ],
    show: [
      { id: 0, value: '12' },
      { id: 1, value: '18' },
    ],
  };

  render() {
    const { sortMenu, show } = this.state;
    return (
      <div className={styles.component}>
        <div className={styles.sortAndShow}>
          <div className={styles.title}>
            <b>FURNITURE</b>
          </div>
          <div className={styles.functionColumn}>
            <div className={styles.dropdownMenu}>
              sort by:
              <select>
                {sortMenu.map(sort => (
                  <option key={sort.id}>{sort.value}</option>
                ))}
              </select>
              show
              <select className={styles.litleSelect}>
                {show.map(sort => (
                  <option key={sort.id}>{sort.value}</option>
                ))}
              </select>
            </div>
            <div className={styles.border}>
              <FontAwesomeIcon className={styles.icon} icon={faThLarge} />
              <FontAwesomeIcon className={styles.icon} icon={faThList} />
            </div>
          </div>
        </div>

        {/* -------------- CARD PRODUCT --------------*/}

        <ProductInColumn className={styles.productCard} />
        <ProductInColumn className={styles.productCard} />
        <ProductInColumn className={styles.productCard} />
        <ProductInColumn className={styles.productCard} />
        <ProductInColumn className={styles.productCard} />
        <ProductInColumn className={styles.productCard} />
      </div>
    );
  }
}

LeftColumn.propTypes = {
  products: PropTypes.array,
  Dropdown: PropTypes.node,
  stars: PropTypes.number,
};
export default LeftColumn;
