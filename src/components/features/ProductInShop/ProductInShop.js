import React from 'react';
import styles from './ProductInShop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExpandAlt,
  faChevronLeft,
  faChevronRight,
  faStar,
  faShoppingBasket,
  faExchangeAlt,
  faEnvelope,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

class ProductInShop extends React.Component {
  state = {
    title: 'Sunbaby Magic Bear Chair',
    stars: 2,
    reviews: '(0 reviews)',
    oldPrice: '$350.00',
    price: '$250.00',
    quantity: '2',
    quantTitle: 'Quantity:',
    quickOverviewTitle: 'Quick Overview',
    quickOverview:
      ' Tempor Lorem anim occaecat qui nisi excepteur occaecat enim dolor. Nostrud incididunt ad aliquip excepteur velit irure. Dolor adipisicing in velit. ',
    avalible: 'In stock',
    category: 'Furniture',
    addRevievText: 'Add Your Review',
  };

  render() {
    const {
      title,
      stars,
      reviews,
      addRevievText,
      oldPrice,
      price,
      quantity,
      quantTitle,
      quickOverviewTitle,
      quickOverview,
      avalible,
      category,
    } = this.state;

    return (
      <div className={styles.component}>
        <div className={styles.mainPhoto}>
          <div className={styles.fullSize}>
            <FontAwesomeIcon className={styles.iconExpand} icon={faExpandAlt} />
          </div>
        </div>
        <div className={styles.titleProduct}>
          {title}
          <FontAwesomeIcon className={styles.chevronLeft} icon={faChevronLeft} />
          <FontAwesomeIcon className={styles.chevronRight} icon={faChevronRight} />
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar} />
                ) : (
                  <FontAwesomeIcon icon={farStar} />
                )}
              </a>
            ))}
            <div className={styles.reviews}>{reviews}</div>
            <div className={styles.textAddReview}>{addRevievText}</div>
          </div>
        </div>
        <div className={styles.oldPrices}>
          <s>{oldPrice}</s>
          <div className={styles.price}>{price}</div>
        </div>

        <div className={styles.icons}>
          <button className={styles.blackIcon}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </button>

          <button className={styles.iconValue}>
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </button>

          <button className={styles.iconValue}>
            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
          </button>

          <button className={styles.iconValue}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </button>
        </div>

        <div className={styles.quantity}>
          <div className={styles.quantTitle}>{quantTitle}</div>
          <div className={styles.resultQuant}>{quantity}</div>
          <button className={styles.iconMinus}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
          <button className={styles.iconPlus}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>

        <div className={styles.quickOverview}>
          <div className={styles.title}>{quickOverviewTitle}</div>
          <div className={styles.quickOverviewText}>{quickOverview}</div>
        </div>

        <div className={styles.value}>
          <div className={styles.valuetext}>
            <b>Availability: </b>
            {avalible}
          </div>
          <div className={styles.category}>
            <b>Category: </b>
            {category}
          </div>
        </div>

        <div className={styles.litlePhoto}>
          <div className={styles.photo}>
            <FontAwesomeIcon className={styles.navLeft} icon={faChevronLeft} />
            <FontAwesomeIcon className={styles.navRight} icon={faChevronRight} />
            <div className={styles.photoInside} />
            <div className={styles.photoInside} />
            <div className={styles.photoInside} />
            <div className={styles.photoInside} />
          </div>
        </div>
        <div className={styles.socialMedia}>
          <button className={styles.iconSocial}>
            <FontAwesomeIcon icon={faFacebookF} />
            <div className={styles.textIcon}> Share</div>
          </button>
          <button className={styles.googlePlus}>
            <FontAwesomeIcon icon={faGooglePlusG} className={styles.iconGoogle} />
            <div className={styles.textIcon}> Google+</div>
          </button>
          <button className={styles.tweet}>
            <FontAwesomeIcon icon={faTwitter} className={styles.iconTweet} />
            <div className={styles.textIcon}> Tweet</div>
          </button>
          <button className={styles.pinterest}>
            <FontAwesomeIcon icon={faPinterestP} className={styles.iconPinterest} />
            <div className={styles.textIcon}> Pinterest</div>
          </button>
          <button className={styles.linkedIn}>
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.iconLinkedIn} />
            <div className={styles.textIcon}> linkedinIn</div>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductInShop;
