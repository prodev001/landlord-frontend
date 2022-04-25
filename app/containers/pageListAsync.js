/* eslint-disable */

import React from 'react';
import Loading from 'leap-components/Loading';
import loadable from '../utils/loadable';

export const DashboardPage = loadable(() => import('./Pages/Dashboard'), {fallback: <Loading />});
export const BuildingPage = loadable(() => import('./Pages/Properties/Buildings'), {fallback: <Loading />});
export const ApplicationPage = loadable(() => import('./Pages/Properties/Applications'), {fallback: <Loading />});
export const ClaimPage = loadable(() => import('./Pages/Properties/Claims'), {fallback: <Loading />});
export const PolicyPage = loadable(() => import('./Pages/Properties/Policies'), {fallback: <Loading />});
export const LandlordPage = loadable(() => import('./Pages/Users/Landlord'), {fallback: <Loading />});
export const VPPage = loadable(() => import('./Pages/Users/VP'), {fallback: <Loading />});
export const RMPage = loadable(() => import('./Pages/Users/RM'), {fallback: <Loading />});
export const PMPage = loadable(() => import('./Pages/Users/PM'), {fallback: <Loading />});
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
  import('./Pages/Auth/Login'), {
    fallback: <Loading />,
  });
export const LoginDedicated = loadable(() =>
  import('./Pages/Standalone/LoginDedicated'), {
    fallback: <Loading />,
  });
export const Register = loadable(() =>
  import('./Pages/Auth/Register'), {
    fallback: <Loading />,
  });
export const ResetPassword = loadable(() =>
  import('./Pages/Auth/ResetPassword'), {
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
