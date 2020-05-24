import { connect } from 'react-redux';
import Promotion from './Promotion';

import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Promotion);
