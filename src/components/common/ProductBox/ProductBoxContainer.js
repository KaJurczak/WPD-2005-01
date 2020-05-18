import { connect } from 'react-redux';
import ProductBox from './ProductBox';

import { getFavoriteById, setFavorite } from '../../../redux/favoritesRedux';

const mapStateToProps = (state, props) => ({
  isFavorite: getFavoriteById(state, props.id),
});

const mapDispatchToProps = dispatch => ({
  setFavorite: id => dispatch(setFavorite({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
