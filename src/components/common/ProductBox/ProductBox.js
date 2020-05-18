import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  id,
  image,
  title,
  name,
  price,
  oldPrice,
  promo,
  stars,
  isFavorite,
  setFavorite,
  setProduct,
  removeProduct,
  choosedProductsId,
}) => {
  const classes = [styles.root];
  if (variant) classes.push(styles[variant]);
  
  const markingButton = event => {
    if (!choosedProductsId.includes(id)) {
      setProduct(id);
    } else {
      removeProduct(id);
    }
  };

  return (
    <div className={classes.join(' ')}>
      <div className={styles.photo}>
        <img src={image} alt={title} />
        {promo && variant !== 'featured' && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          {variant !== 'featured' && <Button variant='small'>Quick View</Button>}
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
        {variant === 'featured' && (
          <div className={styles.timeCounter}>
            <div className={styles.counter}>
              <span className={styles.count}>25</span>
              <span className={styles.title}>days</span>
            </div>
            <div className={styles.counter}>
              <span className={styles.count}>13</span>
              <span className={styles.title}>hrs</span>
            </div>
            <div className={styles.counter}>
              <span className={styles.count}>45</span>
              <span className={styles.title}>mins</span>
            </div>
            <div className={styles.counter}>
              <span className={styles.count}>28</span>
              <span className={styles.title}>secs</span>
            </div>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
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
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          {variant === 'featured' ? (
            <div>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faEye}>View</FontAwesomeIcon>
              </Button>
            </div>
          ) : (
            ''
          )}
          <Button
            variant='outline'
            className={isFavorite ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setFavorite(id);
            }}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button 
            variant='outline'
            onClick={event => markingButton(event)}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice !== undefined ? (
            <Button noHover variant='small'>
              <s>${oldPrice}</s> ${price}
            </Button>
          ) : (
            <Button noHover variant='small'>
              ${price}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  isFavorite: PropTypes.bool,
  setFavorite: PropTypes.func,
  setProduct: PropTypes.func,
  removeProduct: PropTypes.func,
  choosedProductsId: PropTypes.array,
};

export default ProductBox;
