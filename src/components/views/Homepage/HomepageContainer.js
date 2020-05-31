import { connect } from 'react-redux';
import Homepage from './Homepage';
import { getViewport } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  viewport: getViewport(state),
});

export default connect(mapStateToProps)(Homepage);
