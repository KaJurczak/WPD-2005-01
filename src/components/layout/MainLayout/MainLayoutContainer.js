import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getViewport, setViewport } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  viewport: getViewport(state),
});

const mapDispatchToProps = dispatch => ({
  setViewport: arg => dispatch(setViewport(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
