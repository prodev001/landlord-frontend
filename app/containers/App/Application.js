/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  Switch, Route, useHistory
} from 'react-router-dom';

import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import {
  DashboardPage,
  LandlordReportPage,
  VicePresidentReportPage,
  RegionalManagerReportPage,
  PropertyManagerPage,
  BuildingPage,
  ApplicationPage,
  ClaimPage,
  PolicyPage,
  LandlordPage,
  VPPage,
  RMPage,
  PMPage,
  NotFound
} from '../pageListAsync';

const Application = () => {
  const history = useHistory();
  const changeMode = useContext(ThemeContext);

  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        <Route exact path="/user/landlord" component={LandlordPage} />
        <Route exact path="/user/vicep-resident" component={VPPage} />
        <Route exact path="/user/regional-manager" component={RMPage} />
        <Route exact path="/user/property-manager" component={PMPage} />
        <Route exact path="/property/buildings" component={BuildingPage} />
        <Route exact path="/property/applications" component={ApplicationPage} />
        <Route exact path="/property/claims" component={ClaimPage} />
        <Route exact path="/property/policies" component={PolicyPage} />
        <Route exact path="/report/landlord" component={LandlordReportPage} />
        <Route exact path="/report/vice-president" component={VicePresidentReportPage} />
        <Route exact path="/report/regional-manager" component={RegionalManagerReportPage} />
        <Route exact path="/report/property-manager" component={PropertyManagerPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
};

export default Application;
