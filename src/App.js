import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './styles/tailwind.css';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

import ProtectedRoute from './helpers/protected-route';
import IsUserLoggedIn from './helpers/is-user-logged-in';

import 'react-loading-skeleton/dist/skeleton.css';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            {/* <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} /> */}

            <Route
              element={
                <IsUserLoggedIn user={user} redirectPath={ROUTES.DASHBOARD} />
              }
            >
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            </Route>

            {/* <Route
              path={ROUTES.SIGN_UP}
              element={
                <IsUserLoggedIn user={user} redirectPath={ROUTES.DASHBOARD}>
                  <SignUp />
                </IsUserLoggedIn>
              }
            /> */}

            <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user} redirectPath={ROUTES.LOGIN}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            {/* <Route path={ROUTES.DASHBOARD} element={<Dashboard />} /> */}
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
