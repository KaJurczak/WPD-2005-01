import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeaturedProducts.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import { getFeatured } from '../../../redux/productsRedux';


class FeaturedProducts extends React.Component {

  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
    //console.log(newPage);
  }

  autoplay(x) {
    const { products } = this.props;
    const intervalDuration = 3000;
    const timeoutDuration = 10000;
    let counter = 0;
    let maxCount = products.length;
    if (x === true) {
    //console.log(maxCount);
    //console.log(counter<maxCount);s
      setTimeout (
        () => {
          setInterval(
            () => {
              if (counter < maxCount-1) {counter +=1;}
              else {counter = 0;}
              this.handlePageChange(counter);
              console.log(counter);
            },
            intervalDuration
          );},timeoutDuration
      ); }
    else if (x === false){
      console.log('autoplay not starting');
    }
    console.log(setTimeout.value);

  }

  componentDidMount() {
    this.autoplay(true)
  }

  stop () {
    let x = 'aa';
    console.log(x);
  }



  render() {
    //this.autoplay()
    const { products } = this.props;
    //console.log(products.length);
    let { activePage } = this.state;
    //console.log(this.state);

    //console.log(activePage);
    //let counter = 0;
    //console.log(counter);
    //setInterval(function(){ counter += 1; this.handleTimerChange(); }, 3000);
    //this.handlePageChange (1)

    const dots = [];
    for (let i = 0; i < products.length; i++) {
      dots.push(
        <li>
          <a
            onClick={() => {
              this.stop();
              this.handlePageChange(i);
            }}
            className={i === activePage && styles.active}
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
