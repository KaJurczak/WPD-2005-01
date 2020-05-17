import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getAll,
  getComparedProduct,
  setProduct,
  removeProduct,
} from '../../../redux/comparedProductsRedux';

const mapStateToProps = state => ({
  options: getAll(state),
  choosedProductsId: getComparedProduct(state),
});

const mapDispatchToProps = dispatch => ({
  setProduct: arg => dispatch(setProduct(arg)),
  removeProduct: arg => dispatch(removeProduct(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
