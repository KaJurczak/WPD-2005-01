import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import styles from './Ratings.module.scss';

class Ratings extends React.Component {
  state = {
    hover: false,
    hovered: 0,
  };

  onHover(item) {
    this.setState({ hover: true, hovered: item });
  }

  onLeave() {
    this.setState({ hover: false, hovered: 0 });
  }

  setRate(e, item, rate) {
    e.preventDefault();
    const { setRatings } = this.props;
    setRatings(item, rate);
  }

  setIcon(item) {
    const { hover, hovered } = this.state;
    const { initValue, itemValue, iconHover, iconDefault } = this.props;

    if (itemValue.length) {
      if (item <= itemValue[0].rate || (hover && item <= hovered)) {
        return iconHover;
      } else return iconDefault;
    } else if (item <= initValue || (hover && item <= hovered)) {
      return iconHover;
    } else return iconDefault;
  }

  render() {
    const { hovered } = this.state;
    const { points, itemValue, itemId } = this.props;
    const items = [];
    for (let i = 1; i <= points; i++) {
      items.push(i);
    }
    return (
      <>
        {items.map(item => (
          <a key={item} href='#' className={styles.root}>
            <FontAwesomeIcon
              key={item}
              icon={this.setIcon(item)}
              onMouseEnter={() => this.onHover(item)}
              onMouseLeave={() => this.onLeave()}
              onClick={e => this.setRate(e, itemId, item)}
              className={
                item <= hovered || (itemValue.length && itemValue[0].rate >= item)
                  ? styles.active
                  : ''
              }
            ></FontAwesomeIcon>
          </a>
        ))}
      </>
    );
  }
}

Ratings.propTypes = {
  points: PropTypes.number,
  iconDefault: PropTypes.string,
  iconHover: PropTypes.string,
  initValue: PropTypes.number,
  itemValue: PropTypes.any,
  itemId: PropTypes.string,
  setRatings: PropTypes.func,
};

Ratings.defaultProps = {
  iconDefault: farStar,
  iconHover: faStar,
  points: 5,
};

export default Ratings;
