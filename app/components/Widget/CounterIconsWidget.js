import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import colorfull from 'leap-api/palette/colorfull';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';

function CounterIconsWidget(props) {
  const { classes } = props;
  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[0]}
            start={0}
            end={100}
            duration={3}
            title="OPEN QUE LEADS"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[1]}
            start={0}
            end={100}
            duration={3}
            title="DAILY ENROLLED POLICES"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[2]}
            start={0}
            end={100}
            duration={3}
            title="WEEKLY ENROLLED POLICES"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[3]}
            start={0}
            end={100}
            duration={3}
            title="DAILY DROPPED CALLS"
          />
        </Grid>
      </Grid>
    </div>
  );
}

CounterIconsWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterIconsWidget);
