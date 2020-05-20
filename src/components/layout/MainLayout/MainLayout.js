import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends React.Component {
  initViewport() {
    const { viewport, setViewport } = this.props;
    const viewportWidth = Number(window.innerWidth);
    let newViewport;
    if (viewportWidth >= 992) {
      newViewport = 'desktop';
    } else if (viewportWidth >= 768) {
      newViewport = 'tablet';
    } else {
      newViewport = 'mobile';
    }
    if (newViewport !== viewport) setViewport(newViewport);
  }

  componentDidMount() {
    this.initViewport();
    window.addEventListener('resize', this.initViewport.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.initViewport.bind(this));
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  viewport: PropTypes.string,
  setViewport: PropTypes.func,
};

export default MainLayout;
