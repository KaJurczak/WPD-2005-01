import {connect} from 'react-redux';
import Promotion from './Promotion';

const mapStateToProps = state => ({
  promotions: state.promotions,
});

export default connect(mapStateToProps)(Promotion);