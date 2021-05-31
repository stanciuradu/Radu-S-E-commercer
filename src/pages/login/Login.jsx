// import componenta Layout care are heder si footer in login
import React from "react";

import { connect } from "react-redux";
// import {signInWithGoogle} from '../apis/firebase';
import { signInWithGoogleAction } from "../../redux/user/userActions";
import { ReactComponent as Google } from "../../assets/Icons/google.svg";
import { ReactComponent as Facebook } from "../../assets/Icons/facebook.svg";
import "./Login.css";
import { signInWithFacebookAction } from "../../redux/user/userActions";
import { Link } from "react-router-dom";

class Login extends React.Component {
  // functia de logare cu Google
  handleGoogleLogin() {
    const { signInWithGoogleWithDispatch } = this.props;
    signInWithGoogleWithDispatch();
    // vreau ca dupa logare sa fiu redirectat la home din login, /insemana home ca si cale
  }
  // functia de logare cu Facebook
  handleFacebookLogin() {
    const { signInWithFacebookWithDispatch } = this.props;
    signInWithFacebookWithDispatch();
  }
  // metoda de lifecycle pentru actualizarea datelor utilizatorului
  componentDidUpdate(prevProps) {
    if (this.props.userData !== prevProps.userData) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="login-page">
        <div className="titlu-login-page">
          <h1 className="h2">Pagina de Login</h1>
          <Link to="/" className="link">
            <h2>Înapoi la Home</h2>
          </Link>
        </div>
        <p>Alege providerul cu care vrei să vrei să te loghezi:</p>
        <div className="col-12-login col-md-6">
          <button
            className="btn btn-outline-dark d-flex align-items-center"
            onClick={() => this.handleGoogleLogin()}
          >
            <Google className="w-50 mr-3" />
            <span className="text-nowrap">Loghează-te cu Google</span>
          </button>

          <button
            id="facebook"
            className="btn btn-outline-dark d-flex align-items-center"
            onClick={() => this.handleFacebookLogin()}
          >
            <Facebook className="w-50 mr-3" />
            <span className="text-nowrap">Loghează-te cu Facebook</span>
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signInWithGoogleWithDispatch: () => dispatch(signInWithGoogleAction()),
    signInWithFacebookWithDispatch: () => dispatch(signInWithFacebookAction()),
  };
}

function mapStateToProps(state) {
  return {
    userData: state.user.data,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
