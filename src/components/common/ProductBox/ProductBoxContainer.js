import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getFavoriteById, setFavorite } from '../../../redux/favoritesRedux';
import {
  getAll,
  getComparedProduct,
  setProduct,
  removeProduct,
} from '../../../redux/comparedProductsRedux';

const mapStateToProps = (state, props) => ({
  isFavorite: getFavoriteById(state, props.id),
  options: getAll(state),
  choosedProductsId: getComparedProduct(state),
});

const mapDispatchToProps = dispatch => ({
  setFavorite: id => dispatch(setFavorite({ id })),
  setProduct: arg => dispatch(setProduct(arg)),
  removeProduct: arg => dispatch(removeProduct(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
