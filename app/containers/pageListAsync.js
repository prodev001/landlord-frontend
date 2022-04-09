/* eslint-disable */

import React from 'react';
import Loading from 'leap-components/Loading';
import loadable from '../utils/loadable';

export const DashboardPage = loadable(() => import('./Pages/Dashboard'), {fallback: <Loading />});
export const BuildingPage = loadable(() => import('./Pages/Properties/Buildings'), {fallback: <Loading />});
export const LandlordReportPage = loadable(() => import('./Pages/Report/Landlord'), {fallback: <Loading />});
export const VicePresidentReportPage = loadable(() => import('./Pages/Report/VP'), {fallback: <Loading />});
export const RegionalManagerReportPage = loadable(() => import('./Pages/Report/RM'), {fallback: <Loading />});
export const PropertyManagerPage = loadable(() => import('./Pages/Report/PM'), {fallback: <Loading />});
// export const ExternalPresentationClientInfoPage = loadable(() =>
// import('./Pages/ExternalPresentation/Pages/ClientInfoPage'), {
//   fallback: <Loading />,
// });
///////////////////////
export const Login = loadable(() =>
  import('./Pages/Users/Login'), {
    fallback: <Loading />,
  });
export const LoginDedicated = loadable(() =>
  import('./Pages/Standalone/LoginDedicated'), {
    fallback: <Loading />,
  });
export const Register = loadable(() =>
  import('./Pages/Users/Register'), {
    fallback: <Loading />,
  });
export const ResetPassword = loadable(() =>
  import('./Pages/Users/ResetPassword'), {
    fallback: <Loading />,
  });
export const NotFound = loadable(() =>
  import('./NotFound/NotFound'), {
  fallback: <Loading />,
});
export const NotFoundDedicated = loadable(() =>
  import('./Pages/Standalone/NotFoundDedicated'), {
    fallback: <Loading />,
  });
export const Error = loadable(() =>
  import('./Pages/Error'), {
    fallback: <Loading />,
  });
