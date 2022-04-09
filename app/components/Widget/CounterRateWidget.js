import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import {
  LineChart,
  Line,
} from 'recharts';
import { data1 } from 'leap-api/chart/chartMiniData';
import colorfull from 'leap-api/palette/colorfull';
import Logo from 'leap-images/favicon.png';
import styles from './widget-jss';
import CounterTrading from '../Counter/CounterTrading';

function CounterRateWidget(props) {
  const { classes, width } = props;
  return (
    <div className={classes.rootCounter}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item md={3} xs={6}>
              <CounterTrading
                color={colorfull[4]}
                unitAfter=" %"
                start={0}
                end={217.89}
                duration={3}
                title="Building Approval Rate"
                logo={Logo}
                position="up"
                value={5.6}
              >
                <LineChart width={240} height={60} data={data1}>
                  <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
                </LineChart>
              </CounterTrading>
            </Grid>
            <Grid item md={3} xs={6}>
              <CounterTrading
                color={colorfull[6]}
                unitAfter=" %"
                start={0}
                end={7.45}
                duration={3}
                title="Building Approved to Issue Rate"
                logo={Logo}
                position="down"
                value={1.60}
              >
                <LineChart width={240} height={60} data={data1}>
                  <Line type="monotone" dataKey="amt" stroke="#FFFFFF" strokeWidth={2} />
                </LineChart>
              </CounterTrading>
            </Grid>
            <Grid item md={3} xs={6}>
              <CounterTrading
                color={colorfull[0]}
                unitAfter=" %"
                start={0}
                end={21.66}
                duration={3}
                title="Total Issued Policies"
                logo={Logo}
                position="up"
                value={1.16}
              >
                <LineChart width={240} height={60} data={data1}>
                  <Line type="monotone" dataKey="uv" stroke="#FFFFFF" strokeWidth={2} />
                </LineChart>
              </CounterTrading>
            </Grid>
            <Grid item md={3} xs={6}>
              <CounterTrading
                color={colorfull[1]}
                unitAfter=" %"
                start={0}
                end={104.78}
                duration={3}
                title="Cancellation %"
                logo={Logo}
                position="down"
                value={2.9}
              >
                <LineChart width={240} height={60} data={data1}>
                  <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
                </LineChart>
              </CounterTrading>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

CounterRateWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles)(CounterRateWidget));
