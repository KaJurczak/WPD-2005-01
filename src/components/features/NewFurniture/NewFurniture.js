import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { settings } from './NewFurniture.config.js';
import Swipe from '../../common/Swipe/Swipe';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  nextPage(pages) {
    let page = this.state.activePage;
    if (page < pages - 1) this.setState({ activePage: page + 1 });
  }

  prevPage() {
    let page = this.state.activePage;
    if (page > 0) this.setState({ activePage: page - 1 });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory, activePage: 0 });
  }

  render() {
    const {
      categories,
      products,
      choosedProductsId,
      removeProduct,
      viewport,
    } = this.props;
    const { activeCategory, activePage } = this.state;
    const itemsCount = settings[viewport];
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / itemsCount);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
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

    const addToStickyBar = products.map(product => {
      if (
        choosedProductsId.includes(product.id) &&
        choosedProductsId.indexOf(product.id) <= 3
      ) {
        const markingButton = event => {
          removeProduct(product.id);
        };

        return (
          <div key={product.id} className={'col-3 row ' + styles.stickyBarWrapper}>
            <div className={styles.photo}>
              <span className={styles.close} onClick={event => markingButton(event)}>
                x
              </span>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.compare + ' col-1'}>
              <Button variant='outline' className={styles.stickyBarOutline}>
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
            </div>
          </div>
        );
      }
    });

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipe
            leftAction={() => this.nextPage(pagesCount)}
            rightAction={() => this.prevPage()}
          >
            <div className='row'>
              {categoryProducts
                .slice(activePage * itemsCount, (activePage + 1) * itemsCount)
                .map(item => (
                  <div key={item.id} className={'col-auto ' + styles.col}>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </Swipe>
          <div className={styles.stickyBar}>
            <div className={'row ' + styles.rowcontrol}>{addToStickyBar}</div>
          </div>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  choosedProductsId: PropTypes.array,
  removeProduct: PropTypes.func,
  viewport: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
