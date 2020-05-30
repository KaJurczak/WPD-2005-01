import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Swipe from '../../common/Swipe/Swipe';

const brandsData = [
  'https://pics.tinypic.pl/i/01006/u3zvh8bu88b4.png',
  'https://images.tinypic.pl/i/01006/lo0wdsvhnaa7.jpg',
  'https://images.tinypic.pl/i/01006/nc6o24wtfgbr.png',
  'https://images.tinypic.pl/i/01006/ngsy1aua7sjf.png',
  'https://images.tinypic.pl/i/01006/13stvoi1fsei.png',
  'https://images.tinypic.pl/i/01006/xsxob3cvjje1.gif',
];

const brandsAtScreen = {
  mobile: 3,
  tablet: 4,
  desktop: 6,
};

class Brands extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(e, action, length) {
    e.preventDefault();

    let newPage = this.state.activePage;

    if (action === 'next' && newPage < length - 1) {
      this.setState({ activePage: newPage + 1 });
    }

    if (action === 'prev' && newPage > 0) {
      this.setState({ activePage: newPage - 1 });
    }
  }

  nextPage(pages) {
    let page = this.state.activePage;
    if (page < pages - 1) this.setState({ activePage: page + 1 });
  }

  prevPage() {
    let page = this.state.activePage;
    if (page > 0) this.setState({ activePage: page - 1 });
  }

  render() {
    const { activePage } = this.state;
    const { viewport } = this.props;
    const itemsCount = brandsAtScreen[viewport];

    const brands = brandsData;
    const pages = brandsData.length;
    const pagesCount = Math.ceil(pages / itemsCount);

    return (
      <div className={styles.root}>
        <div className='container'>
          <Swipe
            leftAction={() => this.nextPage(pagesCount)}
            rightAction={() => this.prevPage()}
          >
            <div className={`row align-items-center ${styles.wrapper}`}>
              <Button
                className={styles.button}
                onClick={e => this.handlePageChange(e, 'prev', pages)}
              >
                <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
              </Button>
              <div className={`row col`}>
                {brands
                  .slice(activePage * itemsCount, (activePage + 1) * itemsCount)
                  .map(item => (
                    <div key={item} className={`col ${styles.image}`}>
                      <img src={item} alt=''></img>
                    </div>
                  ))}
              </div>
              <Button
                className={styles.button}
                onClick={e => this.handlePageChange(e, 'next', pages)}
              >
                <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
              </Button>
            </div>
          </Swipe>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  viewport: PropTypes.string,
};

export default Brands;
