import React , { Component }from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.css';
import { loadUser } from '../actions/index';
import Header from './Header';
import Logo from './Logo';
import Toast from './Toast';
import Signup from './SignupForm';
import Login from './LoginForm';
import Logout from './Logout';
import Dashboard from './Dashboard';
import vanhackLogo from '../assets/images/logo.svg';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header>
            <Logo src={vanhackLogo} width={100} height={58} alt="Logo" />
          </Header>

          <div className="content">
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 1 }}
              atActive={{ opacity: 1 }}
              className="route-wrapper"
            >
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/dashboard" component={Dashboard} />
            </AnimatedSwitch>
          </div>
          <Toast />
        </div>
      </BrowserRouter>
    )
  }
};

const mapStateToProps = state => ({
  user: state.loadUser,
  message: state.addMessage,
});

const mapDispatchToProps = dispatcher => ({
  loadUser: dispatcher(loadUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
