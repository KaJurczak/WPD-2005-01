import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll, setProduct } from '../../../redux/comparedProductsRedux';

const mapStateToProps = state => ({
  options: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  setProduct: arg => dispatch(setProduct(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
