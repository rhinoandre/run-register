import { connect } from 'react-redux';
import formSerialize from 'form-serialize';

import { doLogin } from '../actions/login'
import LoginForm from '../components/login/';

const mapStateToProps = ({ login }) => ({ errorMessage: login.errorMessage, isAuthenticated: login.isAuthenticated });

const mapDispatchToProps = (dispatch) => ({
  doLogin: (event) => {
    event.preventDefault();
    const loginFormData = formSerialize(event.target, { hash: true });

    return dispatch(doLogin(loginFormData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
