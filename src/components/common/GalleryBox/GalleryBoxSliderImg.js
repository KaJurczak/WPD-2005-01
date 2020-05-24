import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryBox.module.scss';


const GalleryBoxSliderImg = ({ image, name }) => (
  <div className={styles.root}>
    <img src={image} alt={name} className={styles.sliderImg} />
  </div>
);

GalleryBoxSliderImg.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default GalleryBoxSliderImg;
