
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
                <Typography variant="subtitle1" color="secondary">Building Name</Typography>
                <Typography variant="body1">{data.name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Account Recent Type</Typography>
                <Typography variant="body1">{data.building_type}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Phone</Typography>
                <Typography variant="body1">{data.phone}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Billing Street</Typography>
                <Typography variant="body1">{data.billingStreet}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Primary Contact</Typography>
                <Typography variant="body1">{data.primary_contact}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Email Address</Typography>
                <Typography variant="body1">{data.email_address}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Student Housing</Typography>
                <Typography variant="body1">{data.student_housing}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Landlord Name</Typography>
                <Typography variant="body1">{data.landlord_name}</Typography>
              </Grid>
            </Grid>
          </PapperBlock>
          <PapperBlock whiteBg title="Building Level Occupancy Rates">
            <Grid container spacing={4}>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Total # of Units</Typography>
                <Typography variant="body1">{data.total_of_units}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Total # Leap Active Units</Typography>
                <Typography variant="body1">{data.total_of_active_leap_units}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Leap % Total Inventory</Typography>
                <Typography variant="body1">{data.leap_of_total_inventory}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Estimated Application Decilne Rate</Typography>
                <Typography variant="body1">{data.estimated_applicant_decline_rate}</Typography>
              </Grid>
            </Grid>
          </PapperBlock>
          <PapperBlock whiteBg title="Building Summary Data">
            <Grid container spacing={4}>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Last Application Date</Typography>
                <Typography variant="body1">{data.last_application_date}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Total # of Applications</Typography>
                <Typography variant="body1">{data.total_of_applications}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Days Since Last Application</Typography>
                <Typography variant="body1">{data.last_application_date}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Total # of Decisioned Application</Typography>
                <Typography variant="body1">{data.total_of_decisioned_app}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Building Approval Rate</Typography>
                <Typography variant="body1">{data.building_approval_rate}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Total # of Cancelled Applications</Typography>
                <Typography variant="body1">{data.total_of_cancelled_applications}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Building Approved to Issue Rate</Typography>
                <Typography variant="body1">{data.building_approved_to_issue_rate}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Total # of Approved Applications</Typography>
                <Typography variant="body1">{data.total_of_approved_app}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Total Number of Issued Policies</Typography>
                <Typography variant="body1">{data.total_of_issued_policies}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Total # of Declined Application</Typography>
                <Typography variant="body1">{data.total_of_declined_applications}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Cancellation %</Typography>
                <Typography variant="body1">{data.cancellation_percentage}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="secondary">Declined %</Typography>
                <Typography variant="body1">{data.decline_percentage}</Typography>
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
