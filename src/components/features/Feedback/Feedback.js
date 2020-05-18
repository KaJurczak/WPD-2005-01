import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

const Feedback = () => {
  const dots = [];
  dots.push(
    <li>
      <a className={styles.active}>page</a>
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
              <ul>{dots}</ul>
            </div>
            Feedback
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default Feedback;
