import { connect } from 'react-redux';
import { doLogin } from '../actions/login'
import LoginForm from '../components/login/';

const mapStateToProps = ({ Login }) => ({ errorMessage: Login.errorMessage });

const mapDispatchToProps = (dispatch) => ({
  doLogin: () => dispatch(doLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
