import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeaturedProducts.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Swipe from '../../common/Swipe/Swipe';


class FeaturedProducts extends React.Component {

  state = {
    activePage: 0,
  };

  componentDidMount() {
    this.autoplay(false)
  }

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

  autoplay(restarted) {
    const { products } = this.props;
    const intervalDuration = 3000;
    let maxCount = products.length;
    let counter = -1;

    if (restarted === true) {counter = -3; console.log('autoplay restarts');}
    else {console.log('autoplay first run');}


    this.autoplayEngine = setInterval(
      () => {

        if (counter < maxCount-1) {counter +=1;}
        else {counter = 0;}

        if (counter >= 0) {this.handlePageChange(counter);}
        else {console.log('waiting...');}

        console.log(counter);
      },
      intervalDuration
    );
  }

  restart () {
    clearInterval(this.autoplayEngine);
    this.autoplay(true)
  }

  render() {
    const { products } = this.props;
    const pages = products.length;
    let { activePage } = this.state;
    const dots = [];
    for (let i = 0; i < pages; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => {
              this.restart();
              this.handlePageChange(i);
            }}
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
        <Swipe
          leftAction={() => this.nextPage(pages)}
          rightAction={() => this.prevPage()}
        >
          {products.slice(activePage * 1, (activePage + 1) * 1).map(item => (
            <div key={item.id}>
              <ProductBox {...item} variant='featured' />
            </div>
          ))}
        </Swipe>
      </div>
    );

  }
}

FeaturedProducts.propTypes = {
  products: PropTypes.array,
};

export default FeaturedProducts;
