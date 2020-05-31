import React from 'react';
import Styles from './PromoInFilter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class ProductPromo extends React.Component {
  state = {
    title: 'Office Chair',
    price: '$350.00',
    stars: 2,
  };

  render() {
    const { title, price, stars } = this.state;
    return (
      <div className={Styles.product}>
        <div className={Styles.photoProduct} />
        <div className={Styles.titleProduct}>{title}</div>
        <div className={Styles.price}>{price}</div>
        <div className={Styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar} />
              ) : (
                <FontAwesomeIcon icon={farStar} />
              )}
            </a>
          ))}
        </div>
        <div className={Styles.button}>ADD TO CART</div>
      </div>
    );
  }
}

export default ProductPromo;
