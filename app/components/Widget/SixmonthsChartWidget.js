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
import Style from '@material-ui/icons/Style';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import colorfull from 'leap-api/palette/colorfull';
import {
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
import { dataAppSix } from 'leap-api/chart/chartData';
import { data2 } from 'leap-api/chart/chartMiniData';
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

function SixmonthsChartWidget(props) {
  const { classes } = props;
  return (
    <Paper elevation={4}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <PapperBlock whiteBg noMargin title="Application Volumns last 6 months" icon="ion-ios-stats-outline" desc="">
            <div className={classes.chartWrap}>
              <div className={classes.chartFluid}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dataAppSix}
                  >
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <CartesianAxis />
                    <Tooltip />
                    <Bar dataKey="Last" fill={color.primary} />
                    <Bar dataKey="Current" fill={color.secondary} />
                    <Bar dataKey="Future" fill={color.fourth} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </PapperBlock>
        </Grid>
        <Grid item md={6} xs={12}>
          <PapperBlock whiteBg noMargin title="Policy Issued last 6 months" icon="ion-ios-stats-outline" desc="">
            <div className={classes.chartWrap}>
              <div className={classes.chartFluid}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dataAppSix}
                  >
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <CartesianAxis />
                    <Tooltip />
                    <Bar dataKey="Last" fill={color.primary} />
                    <Bar dataKey="Current" fill={color.secondary} />
                    <Bar dataKey="Future" fill={color.fourth} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </PapperBlock>
        </Grid>
      </Grid>
    </Paper>
  );
}

SixmonthsChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SixmonthsChartWidget);
