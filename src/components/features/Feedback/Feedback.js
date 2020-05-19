import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

const Feedback = () => {
  const dotsActive = [];
  dotsActive.push(
    <li key='dotsKey1'>
      <a className={styles.active}>dots</a>
    </li>
  );
  const dotsNotActive = [];
  dotsNotActive.push(
    <li key='dotsKey1'>
      <a className={styles.notActive}>dots</a>
    </li>
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.feedback}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>CLIENT FEEDBACK</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                {dotsActive}
                {dotsNotActive}
                {dotsNotActive}
              </ul>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.font}>
              <a href='#'>
                <i className={`fas fa-quote-right`}></i>
              </a>
            </div>
            <div className={styles.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut est
                commodo, tempor quam ut, maximus ex. Donec quis consequat nisi. Vivamus
                eget iaculis justo, id vulputate augue. Fusce faucibus pulvinar nibh at
                imperdiet.
              </p>
            </div>
            <div className={styles.person}>
              <img
                className={styles.personsPhoto}
                src='./images/Feedback_photo.jpg'
                alt='personalPhoto'
                title='photo'
              ></img>
              <div className={styles.PersonsText}>
                <p className={styles.personsName}>
                  <b>John Smith </b>
                </p>
                <p className={styles.personsDescribe}> Furniture client </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default Feedback;
