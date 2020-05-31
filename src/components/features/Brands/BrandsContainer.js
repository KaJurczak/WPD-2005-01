import { connect } from 'react-redux';
import Brands from './Brands';
import { getViewport } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  viewport: getViewport(state),
});

export default connect(mapStateToProps)(Brands);
