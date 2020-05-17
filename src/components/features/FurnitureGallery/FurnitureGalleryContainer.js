import { connect } from 'react-redux';

import FurnitureGallery from './FurnitureGallery';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

export default connect(mapStateToProps)(FurnitureGallery);
