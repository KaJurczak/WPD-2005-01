import React from 'react';
import PropTypes from 'prop-types';
import styles from './BanerSlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
// import parser from 'html-react-parser';

// START DEMO DATA
const demoData = [
  {
    id: 1,
    title: '<span>indoor</span> furniture',
    subtitle: 'save up to 50% of all furniture',
    image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
  },
  {
    id: 2,
    title: 'New <span>arrival</span>',
    subtitle: 'discover new brands form Asia',
    image: 'https://files.tinypic.pl/i/01005/lnrrb919kzjz.jpeg',
  },
];
// END DEMO DATA
class BanerSlider extends React.Component {
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

  render() {
    const { activePage } = this.state;
    const baners = demoData;
    const length = baners.length;

    return (
      <div>
        {baners.slice(activePage * 1, (activePage + 1) * 1).map(item => (
          <div key={item.id}>
            <div className={styles.photo}>
              <img src={item.image} alt={item.title} />
              <div className={styles.wrapper}>
                {/* <h2 className={styles.title}>{parser(item.title)}</h2> */}
                <p className={styles.subtitle}>{item.subtitle}</p>
                <div className={styles.button}>
                  <Button>shop now</Button>
                </div>
              </div>
            </div>
            <div className={styles.controls}>
              <Button
                className='col-6'
                onClick={e => this.handlePageChange(e, 'prev', length)}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </Button>
              <Button
                className='col-6'
                onClick={e => this.handlePageChange(e, 'next', length)}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

BanerSlider.propTypes = {
  baners: PropTypes.array,
};
export default BanerSlider;
