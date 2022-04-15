import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ user, redirectPath = '/', children }) {
  if (!user) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  redirectPath: PropTypes.string,
  children: PropTypes.object,
};
