import { connect } from 'react-redux';
import FeaturedProducts from './FeaturedProducts';

import { getFeatured } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getFeatured(state),
});

export default connect(mapStateToProps)(FeaturedProducts);
