import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProductsContainer';
import BanerSlider from '../../features/BanerSlider/BanerSlider';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGalleryContainer';
import Feedback from '../../features/Feedback/Feedback';

const Homepage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          <FeaturedProducts />
        </div>
        <div className='col-12 col-lg-8 pl-lg-0'>
          <BanerSlider />
        </div>
      </div>
    </div>
    <FeatureBoxes />
    <NewFurniture />
    <FurnitureGallery />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
