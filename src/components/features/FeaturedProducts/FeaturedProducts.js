import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeaturedProducts.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

class FeaturedProducts extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { products } = this.props;
    const { activePage } = this.state;
    const dots = [];
    for (let i = 0; i < products.length; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <div>
        <div className={'row no-gutters ' + styles.panelBar}>
          <div className='col-auto'>
            <h3 className={styles.heading}>Hot Deals</h3>
          </div>
          <div className={'col-auto ' + styles.dots}>
            <ul>{dots}</ul>
          </div>
        </div>
        {products.slice(activePage * 1, (activePage + 1) * 1).map(item => (
          <div key={item.id}>
            <ProductBox {...item} variant='featured' />
          </div>
        ))}
      </div>
    );
  }
}

FeaturedProducts.propTypes = {
  products: PropTypes.array,
};

export default FeaturedProducts;
