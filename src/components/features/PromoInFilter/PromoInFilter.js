import React from 'react';
import Styles from './PromoInFilter.module.scss';
import ProductPromo from './ProductPromo';

class PromoInFilter extends React.Component {
  state = {
    title: 'FEATURED PRODUCTS',
    products: { title: 'Office Chair', price: '350$', stars: 2 },
  };

  render() {
    const { title } = this.state;
    return (
      <div className={Styles.container}>
        <div className={Styles.title}>{title}</div>
        <ProductPromo />
        <ProductPromo />
        <ProductPromo />
      </div>
    );
  }
}

export default PromoInFilter;
