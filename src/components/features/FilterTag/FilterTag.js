import React from 'react';
import Styles from './FilterTag.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
class FilterTag extends React.Component {
  state = ['Table', 'Chair', 'Hand Bag', 'Women', 'Fashion', 'Clothes'];

  render() {
    const { state } = this;
    const title = 'SORT BY TAGS';
    return (
      <div className={Styles.component}>
        <div className={Styles.title}>{title}</div>

        {state.map(tag => (
          <div key={tag} className={Styles.tags}>
            <FontAwesomeIcon className={Styles.icon} icon={faTags} />
            <p>{tag}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FilterTag;
