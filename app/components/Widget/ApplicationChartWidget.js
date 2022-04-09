import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import Work from '@material-ui/icons/Work';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import FilterCenterFocus from '@material-ui/icons/FilterCenterFocus';
import LinearProgress from '@material-ui/core/LinearProgress';

import Style from '@material-ui/icons/Style';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

import colorfull from 'leap-api/palette/colorfull';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart, Pie, Cell,
  Legend
} from 'recharts';
import { dataApp1, dataApp2 } from 'leap-api/chart/chartData';
import { data2, data3 } from 'leap-api/chart/chartMiniData';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const color = ({
  primary: colorfull[6],
  secondary: colorfull[3],
  third: colorfull[2],
  fourth: colorfull[4],
  five: colorfull[0]
});

const colorsPie = [blue[500], pink[500], cyan[500], purple[500]];

function ApplicationChartWidget(props) {
  const { classes } = props;
  return (
    <PapperBlock whiteBg noMargin title="Applications" icon="ion-ios-stats-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <ul className={classes.bigResume}>
            <li>
              <Avatar className={classNames(classes.avatar, classes.indigoAvatar)}>
                <Work />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.indigoText}>4321</span>
                <Typography>Last</Typography>
              </Typography>
            </li>
            <li>
              <Avatar className={classNames(classes.avatar, classes.tealAvatar)}>
                <Work />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.tealText}>9876</span>
                <Typography>Current</Typography>
              </Typography>
            </li>
            <li>
              <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>
                <Work />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.blueText}>10500</span>
                <Typography>Future</Typography>
              </Typography>
            </li>
          </ul>
          <div className={classes.chartWrap}>
            <div className={classes.chartFluid}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={dataApp1}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <XAxis dataKey="name" tickLine={false} />
                  <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <CartesianAxis vertical={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="Last" stackId="1" stroke="none" fillOpacity="0.7" fill={color.primary} />
                  <Area type="monotone" dataKey="Current" stackId="2" stroke="none" fillOpacity="0.7" fill={color.secondary} />
                  <Area type="monotone" dataKey="Future" stackId="3" stroke="none" fillOpacity="0.7" fill={color.fourth} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography className={classes.smallTitle} variant="button">
            <CardGiftcard className={classes.leftIcon} />
              Today Applications
          </Typography>
          <Divider className={classes.divider} />
          <Grid container className={classes.secondaryWrap}>
            <PieChart width={300} height={300}>
              <Pie
                data={data3}
                cx={130}
                cy={120}
                dataKey="value"
                innerRadius={40}
                outerRadius={80}
                fill="#FFFFFF"
                paddingAngle={5}
                label
              >
                {
                  data3.map((entry, index) => <Cell key={index.toString()} fill={colorsPie[index % colorsPie.length]} />)
                }
              </Pie>
              <Legend iconType="circle" verticalALign="bottom" iconSize={10} />
            </PieChart>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classNames(classes.divider, 'm-5')} />
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <ul className={classes.bigResume}>
            <li>
              <Avatar className={classNames(classes.avatar, classes.indigoAvatar)}>
                <Work />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.indigoText}>1286</span>
                <Typography>Total Applications</Typography>
              </Typography>
            </li>
            <li>
              <Avatar className={classNames(classes.avatar, classes.tealAvatar)}>
                <Check />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.tealText}>9876</span>
                <Typography>Approved</Typography>
              </Typography>
            </li>
            <li>
              <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>
                <Clear />
              </Avatar>
              <Typography variant="h6">
                <span className={classes.blueText}>3000</span>
                <Typography>Declined</Typography>
              </Typography>
            </li>
          </ul>
          <div className={classes.chartWrap}>
            <div className={classes.chartFluid}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={dataApp2}
                >
                  <XAxis dataKey="name" tickLine={false} />
                  <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <CartesianAxis />
                  <Tooltip />
                  <Bar dataKey="Approved" fill={color.secondary} />
                  <Bar dataKey="Declined" fill={color.five} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography className={classes.smallTitle} variant="button">
            <CardGiftcard className={classes.leftIcon} />
              Application Distribution
          </Typography>
          <Divider className={classes.divider} />
          <ul className={classes.secondaryWrap}>
            <li>
              <Typography gutterBottom>Stage-01</Typography>
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.pinkProgress)} value={24} />
            </li>
            <li>
              <Typography gutterBottom>Stage-02</Typography>
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.purpleProgress)} value={89} />
            </li>
            <li>
              <Typography gutterBottom>Stage-03</Typography>
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.orangeProgress)} value={78} />
            </li>
            <li>
              <Typography gutterBottom>Stage-04</Typography>
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.greenProgress)} value={55} />
            </li>
            <li>
              <Typography gutterBottom>Stage-05</Typography>
              <LinearProgress variant="determinate" className={classNames(classes.progress, classes.blueProgress)} value={80} />
            </li>
          </ul>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

ApplicationChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicationChartWidget);
