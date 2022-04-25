
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Details from './details';
import Reports from './Reports';
import Claims from './Claims';
import Applications from './Applications';
import Policies from './Policies';
import Buildings from './Buildings';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2)
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
    <Typography component="div" style={{ padding: 8 * 1 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const DetailModal = (props) => {
  const {
    show, data, handleClose, classes
  } = props;

  const [tab, setTab] = useState(0);
  const handleTab = (event, value) => {
    setTab(value);
  };

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
        <DialogContent className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={tab}
              onChange={handleTab}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="About" />
              <Tab label="Reports" />
              <Tab label="Buildings" />
              <Tab label="Applications" />
              <Tab label="Claims" />
              <Tab label="Policies" />
            </Tabs>
          </AppBar>
          {tab === 0 && <TabContainer><Details data={data} /></TabContainer>}
          {tab === 1 && <TabContainer><Reports data={data} /></TabContainer>}
          {tab === 2 && <TabContainer><Buildings data={data} /></TabContainer>}
          {tab === 3 && <TabContainer><Applications data={data} /></TabContainer>}
          {tab === 4 && <TabContainer><Claims data={data} /></TabContainer>}
          {tab === 5 && <TabContainer><Policies data={data} /></TabContainer>}
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

DetailModal.propTypes = {
  show: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleClose: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(DetailModal);
