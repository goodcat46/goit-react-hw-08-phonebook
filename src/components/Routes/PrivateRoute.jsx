import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
  const { isLoggedIn } = useSelector(selectUserData);
  const shouldReedirect = isLoggedIn && routeProps.restricted;
  console.log(routeProps);
  return (
    <Route {...routeProps}>
      {shouldReedirect ? <Navigate to={redirectTo} /> : children}
    </Route>
  );
}

// PrivateRoute.propTypes = {};
