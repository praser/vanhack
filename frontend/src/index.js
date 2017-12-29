import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import 'materialize-css/dist/css/materialize.css';
import './assets/css/index.css';
import vanhackLogo from './assets/images/logo.svg';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Loading from './components/Loading';
import Login from './components/LoginForm';
import Logo from './components/Logo';
import Logout from './components/Logout';
import NewCategory from './components/NewCategory';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/SignupForm';
import Toast from './components/Toast';

import configureStore from './store/configureStore';

const store = configureStore();

store.subscribe(() =>
  console.log(store.getState())
)

const App = () => (
  <Provider store={store}>
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
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/not_found" component={NotFound} />

            <PrivateRoute path="/logout" component={Logout} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/categories/new" component={NewCategory} />

            <Redirect to="/not_found" />
          </AnimatedSwitch>
        </div>
        <Toast />
        <Loading />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
