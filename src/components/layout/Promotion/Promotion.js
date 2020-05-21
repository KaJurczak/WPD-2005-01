import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';

const Promotion = ({title, description, image }) => (
  <div className='container'>
    <div className={styles.box}>
      <div className={styles.sectionleft}>
        <h3 className={styles.saletext}>{left.title}</h3>
        <img src={promotions.left.image} alt={left.description} />
      </div>
      <div className={styles.sectionright}>
        <div className={styles.text}>
          <div className={styles.textup}>{rightup.title}</div>
          <img src={rightup.image} alt={rightup.description}/> 
        </div>
        <div className={styles.text}>
          <div className={styles.textdown}>{rightdown.title}</div>
          <img src={rightdown.image} alt={rightdown.description}/> 
        </div>
      </div>
    </div>
  </div>
);

Promotion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Promotion;