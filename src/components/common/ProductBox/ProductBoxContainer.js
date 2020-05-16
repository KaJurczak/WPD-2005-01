import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getFavoriteById, setFavorite } from '../../../redux/favoritesRedux';
import { getAll, setProduct } from '../../../redux/comparedProductsRedux';

const mapStateToProps = (state, props) => ({
  isFavorite: getFavoriteById(state, props.id),
  options: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  setFavorite: id => dispatch(setFavorite({ id })),
  setProduct: arg => dispatch(setProduct(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
