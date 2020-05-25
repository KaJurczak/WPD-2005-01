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
    activePage: 0,
    activeCategory: 'chair',
    activeGalleryCat: 'toprated',
    activeProduct: {},
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }


  handleGalleryCatChange(newGalleryCat) {
    this.setState({ activeGalleryCat: newGalleryCat });
    //this.handleProductChange({});
  }



  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { products } = this.props;
    const { activePage, activeCategory, activeGalleryCat  } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
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
                    <h6 onClick={() => this.handleGalleryCatChange('featured')}>FEATURED</h6>
                    <h6 onClick={() => this.handleGalleryCatChange('topseller')}>TOP SELLER</h6>
                    <h6 onClick={() => this.handleGalleryCatChange('saleoff')}>SALE OFF</h6>
                    <h6 onClick={() => this.handleGalleryCatChange('toprated')}>TOP RATED</h6>
                  </div>

                  {galleryProducts.slice(activePage * 1, (activePage + 1) * 1).map(item => (
                    <div key={item.id}>
                      <GalleryBox {...item}/>
                    </div>
                  ))}

                  <div className={styles.slider} >
                    <Button className={styles.sliderArrow}>
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </Button>
                    {galleryProducts.slice(activePage * 1, (activePage + 1) * 5).map(item => (
                      <div key={item.id}  onClick={() => this.handleProductChange(item)}>
                        <GalleryBoxSliderImg{...item}/>
                      </div>
                    ))}
                    <Button className={styles.sliderArrow} >
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
  subcategories: PropTypes.array,
};

export default FurnitureGallery;