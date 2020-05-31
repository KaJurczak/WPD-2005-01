import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import Swipe from '../../common/Swipe/Swipe';

const Feedback = () => {
  const data = [
    {
      id: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut est commodo, tempor quam ut, maximus ex. Donec quis consequat nisi. Vivamus eget iaculis justo, id vulputate augue. Fusce faucibus pulvinar nibh at imperdiet!!',
      image: './images/Feedback_photo.jpg',
      clientName: 'John Smith',
      clientDescription: 'Furniture client',
    },
    {
      id: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut est commodo, tempor quam ut, maximus ex. Donec quis consequat nisi. ',
      image: './images/Feedback_photo.jpg',
      clientName: 'Adam Brown',
      clientDescription: 'Somebody',
    },
    {
      id: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut est commodo, tempor quam ut, maximus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut est commodo, tempor quam ut, maximus ex. ',
      image: './images/Feedback_photo.jpg',
      clientName: 'Mr Nobody',
      clientDescription: 'Client',
    },
  ];

  const [activePage, setActivePage] = useState(0);

  const dotsPageChange = activePage => {
    setActivePage(activePage);
  };

  const handlePageChange = (e, action, length) => {
    e.preventDefault();

    if (action === 'next' && activePage < length - 1) {
      setActivePage(activePage + 1);
    }

    if (action === 'prev' && activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  const nextPage = pages => {
    if (activePage < pages - 1) setActivePage(activePage + 1);
  };

  const prevPage = () => {
    if (activePage > 0) setActivePage(activePage - 1);
  };

  const pages = data.length;

  const dots = [];
  for (let i = 0; i < pages; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => {
            dotsPageChange(i);
          }}
          className={i === activePage ? styles.active : ''}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.feedback}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>CLIENT FEEDBACK</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
          <Swipe leftAction={() => nextPage(pages)} rightAction={() => prevPage()}>
            {data.slice(activePage * 1, (activePage + 1) * 1).map(item => (
              <div key={item.id}>
                <div className={styles.content}>
                  <div className={styles.font}>
                    <a href='#'>
                      <i className={`fas fa-quote-right`}></i>
                    </a>
                  </div>
                  <div className={styles.description}>
                    <p>{item.description}</p>
                  </div>
                  <div className={styles.person}>
                    <img
                      className={styles.personsPhoto}
                      src={item.image}
                      alt='personalPhoto'
                      title='photo'
                    ></img>
                    <div className={styles.PersonsText}>
                      <p className={styles.personsName}>
                        <b>{item.clientName}</b>
                      </p>
                      <p className={styles.personsDescribe}>{item.clientDescription}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.controls}>
                  <Button
                    className='col-6'
                    onClick={e => handlePageChange(e, 'prev', pages)}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </Button>
                  <Button
                    className='col-6'
                    onClick={e => handlePageChange(e, 'next', pages)}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </Button>
                </div>
              </div>
            ))}
          </Swipe>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default Feedback;
