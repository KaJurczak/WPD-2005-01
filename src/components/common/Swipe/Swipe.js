import React from 'react';
import PropTypes from 'prop-types';

class Swipe extends React.Component {
  handleTouchStart(e) {
    this.xSwipe = e.touches[0].clientX;
  }

  handleTouchEnd(e) {
    const swipe = e.changedTouches[0].clientX - this.xSwipe;
    const { leftAction, rightAction } = this.props;
    swipe < 0 ? leftAction() : rightAction();
  }

  render() {
    const { children } = this.props;
    return (
      <div
        onTouchStart={e => this.handleTouchStart(e)}
        onTouchEnd={e => this.handleTouchEnd(e)}
      >
        {children}
      </div>
    );
  }
}

Swipe.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipe;
