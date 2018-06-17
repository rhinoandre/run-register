import { connect } from 'react-redux';
import { doLogin } from '../actions/login'
import LoginForm from '../components/login/';

const mapStateToProps = ({ login }) => ({ errorMessage: login.errorMessage, isAuthenticated: login.isAuthenticated });

const mapDispatchToProps = (dispatch) => ({
  doLogin: (loginData) => dispatch(doLogin(loginData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
