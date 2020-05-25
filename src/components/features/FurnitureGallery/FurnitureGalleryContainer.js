import { connect } from 'react-redux';

import FurnitureGallery from './FurnitureGallery';

import { getAll, getGallery } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  galleryCategories: getGallery(state),
});

export default connect(mapStateToProps)(FurnitureGallery);
