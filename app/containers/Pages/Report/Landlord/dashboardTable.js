import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import tableStyles from 'leap-styles/Table.scss';
import styles from 'leap-components/Tables/tableStyle-jss';
import messageStyles from 'leap-styles/Messages.scss';
import progressStyles from 'leap-styles/Progress.scss';

function createData(stageNumber, stage, app, monthlyRent) {
  return {
    stageNumber,
    stage,
    app,
    monthlyRent,
  };
}

const data = [
  createData(1, 'App Received', 24, '$23,432'),
  createData(2, 'Doc Verification', 37, '$23,432'),
  createData(3, 'Agreement', 24, '$23,432'),
  createData(4, 'Payment', 67, '$23,432'),
  createData(5, 'Policy Bound', 59, '$23,432'),
  createData(6, 'App Declined', 67, '$23,432'),
  createData(7, 'App Cancelled', 77, '$23,432'),
  createData(8, 'Total', 189, '$23,432'),
];

function DashboardTable(props) {
  const { classes, title } = props;
  const getStatus = status => {
    switch (status) {
      case 1: return messageStyles.bgError;
      case 2: return messageStyles.bgWarning;
      case 3: return messageStyles.bgInfo;
      case 4: return messageStyles.bgSuccess;
      case 5: return messageStyles.bgInfo;
      case 6: return messageStyles.bgSuccess;
      case 7: return messageStyles.bgSuccess;
      default: return messageStyles.bgDefault;
    }
  };
  return (
    <div className={classes.rootTable}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          {title === 'distribution' && <Typography variant="h6">Applicatin Distribution</Typography> }
          {title === 'declines' && <Typography variant="h6">Declines By Reason</Typography> }
          {title === 'cancellations' && <Typography variant="h6">Cancellations By Reason</Typography> }
        </div>
      </Toolbar>
      <Table className={classNames(tableStyles.stripped)}>
        <TableHead>
          <TableRow>
            <TableCell variant="head" className="p-2">{title === 'distribution' ? 'Stage' : 'Reason' }</TableCell>
            <TableCell variant="head" align="center" className="p-2">#Apps</TableCell>
            {title === 'distribution' && <TableCell variant="head" align="center" className="p-2">Monthly Rent</TableCell> }
            {title === 'declines' && <TableCell variant="head" align="center" className="p-2">% of Total</TableCell> }
            {title === 'cancellations' && <TableCell variant="head" align="center" className="p-2">Monthly Rent</TableCell> }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => ([
            <TableRow key={n.id}>
              <TableCell className="d-flex align-items-center p-2" align="center">
                {title === 'distribution'
                && (
                  <Avatar variant="square" className={classNames(getStatus(n.stageNumber), 'me-3')}>
                    {n.stageNumber}
                  </Avatar>
                )
                }
                {n.stage}
              </TableCell>
              <TableCell align="center" className="p-2">
                {n.app}
              </TableCell>
              <TableCell align="center" className="p-2">
                {n.monthlyRent}
              </TableCell>
            </TableRow>
          ]))}
        </TableBody>
      </Table>
    </div>
  );
}

DashboardTable.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardTable);
