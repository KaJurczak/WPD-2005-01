import React from 'react';
import Styles from './SizeProductFilter.module.scss';

class SizeProductFilter extends React.Component {
  state = {
    title: 'FILTER BY SIZE',
    size: { S: 2, M: 3, L: 4, XL: 5, XX: 4 },
  };

  render() {
    const { title, size } = this.state;

    return (
      <div className={Styles.component}>
        <div className={Styles.title}>{title}</div>
        {Object.keys(size).map(key => (
          <div key={key}>
            <div className={Styles.filters}>
              <div className={Styles.titleFilter}>
                <div className={Styles.icon}>
                  <p>✓</p>
                </div>
                {key}
              </div>
              <div className={Styles.valueFilter}>
                <div className={Styles.insideValue}>{size[key]}</div>
              </div>
              <br />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SizeProductFilter;
