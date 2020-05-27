import React from 'react';
import styles from './LeftColumn.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
    const { sortMenu, show, products } = this.state;
    const { stars } = this.state.products[0];
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
        <div className={styles.productCard}>
          <div className={styles.productPhoto}>
            <div className={styles.photoText}>sale</div>
          </div>

          <div className={styles.productValue}>
            <div className={styles.nameProduct}>{products[0].name}</div>
            <div className={styles.price}>${products[0].price}</div>
            <div className={styles.rating}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='#'>
                    {i <= stars ? (
                      <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
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
