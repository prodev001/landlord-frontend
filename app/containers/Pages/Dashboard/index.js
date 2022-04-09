import React from 'react';
import PropTypes from 'prop-types';
import brand from 'leap-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';

import {
  CounterChartWidget,
  ApplicationChartWidget,
  BuildingCounterChartWidget,
  SixmonthsChartWidget,
  CounterRatetWidget
} from 'leap-components';
import { Theme } from '@fullcalendar/core';
import DashboardTable from './dashboardTable';
import styles from './dashboard-jss';

function Dahboard(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container className={classes.root}>
        <CounterChartWidget />
      </Grid>
      <Divider className={classes.divider} />
      <ApplicationChartWidget />
      <Divider className={classes.divider} />
      <Grid container className={classes.root}>
        <BuildingCounterChartWidget />
      </Grid>
      <Divider className={classes.divider} />
      <SixmonthsChartWidget />
      <Divider className={classes.divider} />
      <CounterRatetWidget />
      <Box elevation={3} mt={3} p={3} bgcolor="white" borderRadius={5}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <DashboardTable title="distribution" />
          </Grid>
          <Grid item xs={4}>
            <DashboardTable title="declines" />
          </Grid>
          <Grid item xs={4}>
            <DashboardTable title="cancellations" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

Dahboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dahboard);
