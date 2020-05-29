import React from 'react';
import styles from './LeftColumn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faShoppingBasket,
  faExchangeAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

class productInColumn extends React.Component {
  state = {
    id: 'aenean-ru-bristique-1',
    name: 'Aenean Ru Bristique 1',
    category: 'bed',
    image: 'https://files.tinypic.pl/i/01005/e95n3fkh1qp6.jpeg',
    title: 'cool bed',
    price: 30,
    oldPrice: 25,
    stars: 2,
    promo: 'sale',
    featured: true,
    newFurniture: true,
    favorite: '',
    compare: '',
  };

  render() {
    const { name, price } = this.state;
    const { stars } = this.state;
    return (
      <div className={styles.productCard}>
        <div className={styles.productPhoto}>
          <div className={styles.photoText}>sale</div>
        </div>

        <div className={styles.productValue}>
          <div className={styles.nameProduct}>{name}</div>
          <div className={styles.price}>${price}</div>
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
          <div className={styles.descProduct}>
            place for description product, place for description product place for
            description product, place for description product place for description
            product, place for description product
          </div>
          <div className={styles.iconsProduct}>
            <button>
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </button>
            <button>
              <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
            </button>
            <button>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default productInColumn;
