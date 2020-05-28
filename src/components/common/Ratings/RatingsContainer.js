import { connect } from 'react-redux';
import Ratings from './Ratings';
import { getRating, setRatings } from '../../../redux/ratingsRedux';

const mapStateToProps = (state, props) => ({
  itemValue: getRating(state, props.itemId),
});

const mapDispatchToProps = dispatch => ({
  setRatings: (itemId, rate) => dispatch(setRatings({ id: itemId, rate: rate })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
