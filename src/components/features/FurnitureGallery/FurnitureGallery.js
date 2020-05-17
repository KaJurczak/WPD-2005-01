import React from 'react';
//import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';

import GalleryBox from '../../common/GalleryBox/GalleryBox';
import AdBox from '../../common/AdBox/AdBox';

class FurnitureGallery extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'chair',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    //const { products } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row '>
            <div className='col-6'>
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
                <div className='col'>
                  <GalleryBox />
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

export default FurnitureGallery;
