import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProductsContainer';
import BanerSlider from '../../features/BanerSlider/BanerSlider';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/BrandsContainer';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGalleryContainer';
import Feedback from '../../features/Feedback/Feedback';
import Promotion from '../../features/Promotion/PromotionContainer';

const Homepage = ({ viewport }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row pt-3'>
        {viewport !== 'mobile' ? (
          <div className='col-12 col-lg-4'>
            <FeaturedProducts />
          </div>
        ) : (
          ''
        )}
        <div className='col-12 col-lg-8 pl-lg-0'>
          <BanerSlider />
        </div>
      </div>
    </div>
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Brands />
    <FurnitureGallery />
    <Feedback />
  </div>
);

Homepage.propTypes = {
  viewport: PropTypes.string,
};

export default Homepage;
