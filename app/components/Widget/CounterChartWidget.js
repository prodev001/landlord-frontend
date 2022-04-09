import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import colorfull from 'leap-api/palette/colorfull';
import PersonOutline from '@material-ui/icons/PersonOutline';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';

function CounterChartWidget(props) {
  const { classes } = props;
  const user = useSelector(state => state.getIn(['auth', 'currentUser']));
  const role = user.get('role');
  console.log(role, 'adfasdfasdfasdf');
  return (
    <div className={classes.rootCounter}>
      <Grid container spacing={2} justifyContent="center">
        {role === 'Admin'
          && (
            <Grid item md={3} xs={6}>
              <CounterWidget
                color={colorfull[6]}
                start={0}
                end={20}
                duration={3}
                title={<Typography variant="h6">Total Landlrods</Typography>}
              >
                <PersonOutline className={classes.counterIcon} />
              </CounterWidget>
            </Grid>
          )
        }
        {(role === 'Landlord' || role === 'Admin') && (
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[3]}
              start={0}
              end={50}
              duration={3}
              title={<Typography variant="h6">Total Vice Presidents</Typography>}
            >
              <PersonOutline className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
        )}
        {(role === 'Vice President' || role === 'Landlord' || role === 'Admin') && (
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[5]}
              start={0}
              end={150}
              duration={3}
              title={<Typography variant="h6">Total Regional Managers</Typography>}
            >
              <PersonOutline className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
        )}
        {(role === 'Regional Manager' || role === 'Vice President' || role === 'Landlord' || role === 'Admin') && (
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[4]}
              start={0}
              end={350}
              duration={3}
              title={<Typography variant="h6">Total Property Managers</Typography>}
            >
              <PersonOutline className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

CounterChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterChartWidget);
