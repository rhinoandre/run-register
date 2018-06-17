import { connect } from 'react-redux';
import PrivateRouter from '../components/private-router';

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(PrivateRouter);
