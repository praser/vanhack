import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const canAccess = Object.keys(rest.user).length > 0;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (canAccess) {
         return (<Component {...props} />);
        }
          return (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
      }
    }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(PrivateRoute);
