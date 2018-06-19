import { connect } from 'react-redux';
import PrivateRouter from '../components/private-router';

const mapStateToProps = ({ login, router }) => ({ isAuthenticated: login.isAuthenticated, router });
export default connect(mapStateToProps)(PrivateRouter);
