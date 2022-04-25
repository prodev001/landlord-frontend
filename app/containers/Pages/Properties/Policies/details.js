
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { PapperBlock } from 'leap-components';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    marginLeft: theme.spacing(3)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const DetailModal = (props) => {
  const { show, data, handleClose } = props;
  console.log(data);
  const property = useSelector(state => state.getIn(['property', 'building']));

  return (
    <Grid container justify="center" direction="column">
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        scroll="paper"
        maxWidth="xl"
        fullWidth
      >
        <DialogTitle id="form-dialog-title" onClose={handleClose}>{data && data.name}</DialogTitle>
        <DialogContent>
          <PapperBlock whiteBg title="General Information">
            <Grid container spacing={4}>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Account Name</Typography>
                <Typography variant="body1">{data.name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Stage</Typography>
                <Typography variant="body1">{data.stage}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Months Remaining</Typography>
                <Typography variant="body1">{data.months_remaining}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Active Lease</Typography>
                <Typography variant="body1">{data.active_lease}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Application Type</Typography>
                <Typography variant="body1">{data.app_type}</Typography>
              </Grid>
            </Grid>
          </PapperBlock>
          <PapperBlock whiteBg title="Rider Details">
            <Grid container spacing={4}>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Rider ID</Typography>
                <Typography variant="body1">{data.rider_id}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Bond Issue Date</Typography>
                <Typography variant="body1">{data.issue_date}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">LDR Coverage</Typography>
                <Typography variant="body1">{data.ldr_coverage}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Total Coverage Amount</Typography>
                <Typography variant="body1">{data.total_coverage_amount}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Unit</Typography>
                <Typography variant="body1">#unit id</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Lease Start Date</Typography>
                <Typography variant="body1">{data.lease_start_date}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Lease End Date</Typography>
                <Typography variant="body1">{data.lease_end_date}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Total Number of Tenants</Typography>
                <Typography variant="body1">{data.total_number_of_tenants}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Damage Coverage Amount</Typography>
                <Typography variant="body1">{data.damages_premium}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Landlord Account</Typography>
                <Typography variant="body1">{data.lanlord_account_name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Building Account</Typography>
                <Typography variant="body1">{data.apartment_building_name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="primary">Coverage Amount Requested (mo)</Typography>
                <Typography variant="body1">{data.coverage_amount_requested_months}</Typography>
              </Grid>

            </Grid>
          </PapperBlock>
          <PapperBlock whiteBg title="Tenant Information">
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Tenant1</Typography>
                <Typography variant="body1">{data.tenant_1_name}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Tenant2</Typography>
                <Typography variant="body1">{data.tenant_2_name}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Tenant3</Typography>
                <Typography variant="body1">{data.tenant_3_name}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Tenant4</Typography>
                <Typography variant="body1">{data.tenant_4_name}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Tenant1 Portion of fees</Typography>
                <Typography variant="body1">{data.tenant_1_portion_fee}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Tenant2 Portion of fees</Typography>
                <Typography variant="body1">{data.tenant_2_portion_fee}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Tenant3 Portion of fees</Typography>
                <Typography variant="body1">{data.tenant_3_portion_fee}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Tenant4 Portion of fees</Typography>
                <Typography variant="body1">{data.tenant_4_portion_fee}</Typography>
              </Grid>
            </Grid>
          </PapperBlock>
          <PapperBlock whiteBg title="Building Level Occupancy Rates">
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Total # of Units</Typography>
                <Typography variant="body1">{data.total_units}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Total # Leap Active Units</Typography>
                <Typography variant="body1">{data.total_active_leap_units}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Leap % Total Inventory</Typography>
                <Typography variant="body1">{data.leap_total_inventory}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" color="primary">Estimated Applicant Decline Rate</Typography>
                <Typography variant="body1">{data.estimated_app_decline_rate}</Typography>
              </Grid>
            </Grid>
          </PapperBlock>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

DetailModal.propTypes = {
  show: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleClose: PropTypes.object.isRequired
};


export default DetailModal;
