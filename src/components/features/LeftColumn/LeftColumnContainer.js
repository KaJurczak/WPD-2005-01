import { connect } from 'react-redux';
import LeftColumn from './LeftColumn';
import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(LeftColumn);
