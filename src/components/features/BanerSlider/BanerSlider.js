import React from 'react';
import PropTypes from 'prop-types';
import styles from './BanerSlider.module.scss';
import Button from '../../common/Button/Button';

class BanerSlider extends React.Component {
  render() {
    //const { title, subtitle, image } = this.props;
    const title = 'test';
    const subtitle = 'subtitle';
    const image = 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg';
    return (
      <div>
        <div className={styles.photo}>
          <img src={image} alt={title} />
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.button}>
              <Button>shop now</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BanerSlider.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};
export default BanerSlider;
