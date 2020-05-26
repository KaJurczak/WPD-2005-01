import React from 'react';
import styles from './Promotion.module.scss';
import PropTypes from 'prop-types';

class Promotion extends React.Component {
  state = {
    product: { ...this.props.products },
  };

  render() {
    const { product } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.photoFirst}>
          <img src={product[3].image} alt={product[3].image} />
          <div className={styles.wrapper}>
            <h4 className={styles.subtitle}>GUEST ROOM</h4>
            <br />
            <h3 className={styles.title}>SOFA</h3>
            <h2 className={styles.promotion}>- 20%</h2>
          </div>
        </div>

        <div className={styles.photoSecond}>
          <img src={product[28].image} alt={product[28].image} />
          <div className={styles.wrapper}>
            <h3 className={styles.title}>
              <b>OFFICE</b> CHAIR
            </h3>
            <h6 className={styles.subtitle}>COLLECTION</h6>
            <br />
            <h2 className={styles.promotion}>$200.00</h2>
          </div>
        </div>

        <div className={styles.photoThird}>
          <img src={product[51].image} alt={product[51].image} />
          <div className={styles.wrapper}>
            <h5 className={styles.title}>
              <b>SPECIAL </b>COLLECTION
            </h5>
            <br />
            <h6 className={styles.promotion}>SAVE UP 45% OF FURNITURE</h6>
          </div>
        </div>
      </div>
    );
  }
}
Promotion.propTypes = {
  products: PropTypes.array,
};
export default Promotion;
