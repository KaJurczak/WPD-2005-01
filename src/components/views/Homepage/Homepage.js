import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProductsContainer';
import BanerSlider from '../../features/BanerSlider/BanerSlider';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          <FeaturedProducts />
        </div>
        <div className='col-12 col-lg-8'>
          <BanerSlider />
        </div>
      </div>
    </div>
    <FeatureBoxes />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
