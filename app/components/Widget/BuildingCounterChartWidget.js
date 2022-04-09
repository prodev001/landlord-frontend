import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import {
  BarChart, Bar,
  AreaChart, Area,
  LineChart, Line,
} from 'recharts';
import { data1 } from 'leap-api/chart/chartMiniData';
import colorfull from 'leap-api/palette/colorfull';
import PersonOutline from '@material-ui/icons/PersonOutline';
import Business from '@material-ui/icons/Business';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';

function CounterChartWidget(props) {
  const { classes } = props;
  return (
    <div className={classes.rootCounter}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[6]}
            start={0}
            end={120}
            duration={3}
            title={<Typography variant="h6">Total Buildings</Typography>}
          >
            <Business className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[3]}
            start={0}
            end={50}
            duration={3}
            title={<Typography variant="h6">Buildings - In progress</Typography>}
          >
            <Business className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[5]}
            start={0}
            end={70}
            duration={3}
            title={<Typography variant="h6">Buildings - Auto Enroll</Typography>}
          >
            <Business className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item md={3} xs={6}>
          <CounterWidget
            color={colorfull[4]}
            start={0}
            end={5000}
            duration={3}
            title={<Typography variant="h6">Units</Typography>}
          >
            <Business className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

CounterChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterChartWidget);
