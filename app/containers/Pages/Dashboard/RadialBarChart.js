import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  RadialBarChart,
  RadialBar,
  Legend
} from 'recharts';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import { Grid } from '@material-ui/core';
import { PapperBlock } from 'leap-components';

const data1 = [
  {
    name: 'current',
    uv: 1000,
    pv: 2400,
    fill: '#8884d8'
  },
  {
    name: 'past',
    uv: 500,
    pv: 2400,
    fill: '#83a6ed'
  },
];

const data2 = [
  {
    name: 'current',
    uv: 1000,
    pv: 2400,
    fill: '#ffc658'
  },
  {
    name: 'past',
    uv: 500,
    pv: 2400,
    fill: '#d0ed57'
  },
];

const data3 = [
  {
    name: 'current',
    uv: 1000,
    pv: 2400,
    fill: '#82ca9d'
  },
  {
    name: 'past',
    uv: 500,
    pv: 2400,
    fill: '#a4de6c'
  },
];

const styles = theme => ({
  datepicker: {
    width: '150px'
  },
  root: {
    alignItems: 'center'
  }
});

const legendStyle = {
  top: 0,
  left: 350,
  lineHeight: '24px'
};

function RadialBarChartWidget(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const { classes } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <PapperBlock
          whiteBg
          icon="ion-ios-stats-outline"
          title="Gross Monthly Rent"
          datepicker={(
            <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.root}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                format="MMM yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: 'end', className: classes.root }}
                onChange={date => handleDateChange(date)}
                views={['year', 'month']}
                openTo="month"
                className={classes.datepicker}
                color="secondary"
                disableFuture
                leftArrowIcon
              />
            </MuiPickersUtilsProvider>
          )}
        >
          <RadialBarChart width={400} height={300} cx={150} cy={150} innerRadius={50} outerRadius={140} barSize={30} data={data1}>
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={20}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={legendStyle}
            />
          </RadialBarChart>
        </PapperBlock>
      </Grid>
      <Grid item xs={4}>
        <PapperBlock
          whiteBg
          icon="ion-ios-stats-outline"
          title="Gross Annual Rent"
          datepicker={(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                format="yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: 'end', className: classes.root }}
                onChange={date => handleDateChange(date)}
                views={['year']}
                openTo="month"
                className={classes.datepicker}
                color="secondary"
                disableFuture
                leftArrowIcon
              />
            </MuiPickersUtilsProvider>
          )}
        >
          <RadialBarChart width={400} height={300} cx={150} cy={150} innerRadius={50} outerRadius={140} barSize={30} data={data2}>
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={20}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={legendStyle}
            />
          </RadialBarChart>
        </PapperBlock>
      </Grid>
      <Grid item xs={4}>
        <PapperBlock
          whiteBg
          icon="ion-ios-stats-outline"
          title="Monthly Coverage"
          datepicker={(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                format="MMM yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: 'end', className: classes.root }}
                onChange={date => handleDateChange(date)}
                views={['year', 'month']}
                openTo="month"
                className={classes.datepicker}
                color="secondary"
                disableFuture
                leftArrowIcon
              />
            </MuiPickersUtilsProvider>
          )}
        >
          <RadialBarChart width={400} height={300} cx={150} cy={150} innerRadius={50} outerRadius={140} barSize={30} data={data3}>
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={20}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={legendStyle}
            />
          </RadialBarChart>
        </PapperBlock>
      </Grid>
    </Grid>
  );
}

RadialBarChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadialBarChartWidget);
