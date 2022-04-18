import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { PapperBlock } from 'leap-components';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const Details = (props) => {
  const { data } = props;
  const property = useSelector(state => state.getIn(['property', 'building']));
  return (
    <div>
      <PapperBlock whiteBg title="General Information">
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Building Name</Typography>
            <Typography variant="body1">{property.get('NAME')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Account Recent Type</Typography>
            <Typography variant="body1">{property.get('BUILDING_TYPE')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Phone</Typography>
            <Typography variant="body1">{property.get('PHONE')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Billing Street</Typography>
            <Typography variant="body1">{property.get('BILLINGSTREET')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Primary Contact</Typography>
            <Typography variant="body1">{property.get('PRIMARY_CONTACT')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Email Address</Typography>
            <Typography variant="body1">{property.get('EMAIL_ADDRESS')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Student Housing</Typography>
            <Typography variant="body1">{property.get('STUDENT_HOUSING')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Landlord Name</Typography>
            <Typography variant="body1">{property.get('LANDLORD__NAME')}</Typography>
          </Grid>
        </Grid>
      </PapperBlock>
      <PapperBlock whiteBg title="Building Level Occupancy Rates">
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Total # of Units</Typography>
            <Typography variant="body1">{property.get('TOTAL_OF_UNITS')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Total # Leap Active Units</Typography>
            <Typography variant="body1">{property.get('TOTAL_OF_ACTIVE_LEAP_UNITS')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Leap % Total Inventory</Typography>
            <Typography variant="body1">{property.get('LEAP_OF_TOTAL_INVENTORY')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Estimated Application Decilne Rate</Typography>
            <Typography variant="body1">{property.get('ESTIMATED_APPLICANT_DECLINE_RATE')}</Typography>
          </Grid>
        </Grid>
      </PapperBlock>
      <PapperBlock whiteBg title="Building Summary Data">
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Last Application Date</Typography>
            <Typography variant="body1">{property.get('LAST_APPLICATION_DATE')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Total # of Applications</Typography>
            <Typography variant="body1">{property.get('TOTAL_OF_APPLICATIONS')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Days Since Last Application</Typography>
            <Typography variant="body1">{property.get('AST_APPLICATION_DATE')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Total # of Decisioned Application</Typography>
            <Typography variant="body1">{property.get('TOTAL_OF_DECISIONED_APPLICATIONS')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Building Approval Rate</Typography>
            <Typography variant="body1">{property.get('BUILDING_APPROVAL_RATE')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Total # of Cancelled Applications</Typography>
            <Typography variant="body1">{property.get('TOTAL_OF_CANCELLED_APPLICATIONS')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Building Approved to Issue Rate</Typography>
            <Typography variant="body1">{property.get('BUILDING_APPROVED_TO_ISSUE_RATE')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Total # of Approved Applications</Typography>
            <Typography variant="body1">{property.get('TOTAL_OF_APPROVED_APPLICATIONS')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Total Number of Issued Policies</Typography>
            <Typography variant="body1">{property.get('TOTAL_OF_ISSUED_POLICIES')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Total # of Declined Application</Typography>
            <Typography variant="body1">{property.get('TOTAL_OF_DECLINED_APPLICATIONS')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Cancellation %</Typography>
            <Typography variant="body1">{property.get('CANCELLATION_PERCENTAGE')}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">Declined %</Typography>
            <Typography variant="body1">{property.get('DECLINE_PERCENTAGE')}</Typography>
          </Grid>
        </Grid>
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(Details);
