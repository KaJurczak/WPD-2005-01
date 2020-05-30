import React from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';

import GalleryBox from '../../common/GalleryBox/GalleryBox';
import GalleryBoxSliderImg from '../../common/GalleryBox/GalleryBoxSliderImg';
import AdBox from '../../common/AdBox/AdBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

class FurnitureGallery extends React.Component {
  state = {
    activeGalleryCat: 'toprated',
    activeProduct: {},
    firstToDisplay: 0,
    lastToDisplay: 6,
  };

  resetPage() {
    this.setState({ firstToDisplay: 0 });
    this.setState({ lastToDisplay: 6 });
    console.log('reset!');
  }

  handlePageChange(e, action) {
    e.preventDefault();

    const { firstToDisplay, lastToDisplay, activeGalleryCat } = this.state;

    const { products } = this.props;
    const galleryProductsLenght = products.filter(item => item.gallery === activeGalleryCat).length;
    const moveBy = 6;
    const remainder = galleryProductsLenght % moveBy;


    if (action === 'next') {

      if (lastToDisplay + moveBy < galleryProductsLenght) {

        this.setState({ firstToDisplay: firstToDisplay  + moveBy });
        this.setState({ lastToDisplay: lastToDisplay + moveBy });
        console.log('full forward');
      } else if (lastToDisplay + moveBy > galleryProductsLenght && lastToDisplay < galleryProductsLenght){

        this.setState({ firstToDisplay: firstToDisplay  + remainder });
        this.setState({ lastToDisplay: lastToDisplay + remainder });
        console.log('forward by remainder');
      } else {
        console.log('stop');
      }

    }

    if (action === 'prev') {
      if (firstToDisplay >= moveBy) {
        this.setState({ firstToDisplay: firstToDisplay  - moveBy });
        this.setState({ lastToDisplay: lastToDisplay - moveBy });
        console.log('full back');

      } else {
        this.resetPage();
      }
    }
  }

  handleGalleryCatChange(newGalleryCat) {
    this.setState({ activeGalleryCat: newGalleryCat });
    this.handleProductChange({});
    this.resetPage();
  }

  handleProductChange(newProduct) {
    this.setState({ activeProduct: newProduct });
  }

  render() {
    const { products, galleryCategories } = this.props;
    const { activeProduct, activeGalleryCat, firstToDisplay, lastToDisplay  } = this.state;

    const galleryProducts = products.filter(item => item.gallery === activeGalleryCat);


    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row '>
            <div className={'col ' + styles.extendOnTablet}>
              <div className='row no-gutters'>
                <div className='col'>
                  <div className={styles.panelBar}>
                    <div className='row no-gutters'>
                      <div className={styles.heading}>
                        <h3>Furniture Gallery</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className={'col ' + styles.extendOnMobile}>

                  <div className={styles.row}>
                    {galleryCategories.map(item => (
                      <h6 key={item.id} onClick={() => this.handleGalleryCatChange(item.id)}>
                        {item.name}
                      </h6>
                    ))}
                  </div>

                  <div>
                    {activeProduct.id ? '' : this.handleProductChange(galleryProducts[0])}
                    {galleryProducts.filter(product => product.id === activeProduct.id).map(item => (
                      <div key={item.id}>
                        <GalleryBox {...item} />
                      </div>
                    ))}
                  </div>

                  <div className={styles.slider} >
                    <Button className={styles.sliderArrow} onClick={(e) => this.handlePageChange(e,'prev')}>
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </Button>
                    {galleryProducts.slice(firstToDisplay,lastToDisplay).map(item => (
                      <div key={item.id}  onClick={() => this.handleProductChange(item)}>
                        <GalleryBoxSliderImg{...item}/>
                      </div>
                    ))}
                    <Button className={styles.sliderArrow} onClick={(e) => this.handlePageChange(e,'next')} >
                      <FontAwesomeIcon icon={faAngleRight}/>
                    </Button>
                  </div>

                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='row'>
                <div className='col'>
                  <AdBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FurnitureGallery.defaultProps = {
  categories: [],
  products: [],
};

FurnitureGallery.propTypes = {
  products: PropTypes.array,
  galleryCategories: PropTypes.array,
};

export default FurnitureGallery;
