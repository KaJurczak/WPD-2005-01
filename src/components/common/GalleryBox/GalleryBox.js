import React from 'react';
import PropTypes from 'prop-types';

import styles from './GalleryBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
//import GalleryBoxSlider from './GalleryBoxSlider';

const GalleryBox = ({
  image,
  title,
  name,
  price,
  oldPrice,
  promo,
  stars,
  compare,
  favorite,
}) => (
  <div className={styles.root}>
    <div className={styles.row}>
      <h6>FEATURED</h6>
      <h6>TOP SELLER</h6>
      <h6>SALE OFF</h6>
      <h6>TOP RATED</h6>
    </div>

    <div className={styles.photo}>
      <img src={image} alt={title} />
      {promo && <div className={styles.sale}>{promo}</div>}

      <div className={styles.content}>
        <div className={styles.price}>
          {oldPrice !== undefined ? (
            <div>
              <Button noHover variant='main' className={styles.center}>
                <span>${price}</span>
              </Button>
              <Button noHover variant='small'>
                <span>
                  <s>${oldPrice}</s>
                </span>
              </Button>
            </div>
          ) : (
            <Button noHover variant='small'>
              <span>${price}</span>
            </Button>
          )}
        </div>

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

      <div className={styles.actions}>
        <div className={styles.outlines}>
          <div className={favorite === 'yes' ? styles.favorite : ''}>
            <Button variant='outline' className={styles.tooltip}>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              <span className={styles.tooltiptext}>Favorite</span>
            </Button>
          </div>
          <div className={compare === 'yes' ? styles.compare : ''}>
            <Button variant='outline' className={styles.tooltip}>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              <span className={styles.tooltiptext}>Compare</span>
            </Button>
          </div>
          <Button variant='outline' className={styles.tooltip}>
            <FontAwesomeIcon icon={faEye}>Quick view</FontAwesomeIcon>
            <span className={styles.tooltiptext}>Quick view</span>
          </Button>
          <Button variant='outline' className={styles.tooltip}>
            <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
            <span className={styles.tooltiptext}>Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

GalleryBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  compare: PropTypes.string,
  favorite: PropTypes.string,
};

export default GalleryBox;
