import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getComparedProduct } from '../../../redux/comparedProductsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  choosedProductsId: getComparedProduct(state),
});

export default connect(mapStateToProps)(NewFurniture);
