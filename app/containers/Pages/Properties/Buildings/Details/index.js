
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
  const [tab, setTab] = useState(0);

  const property = useSelector(state => state.getIn(['property', 'building']));
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
        <DialogTitle id="form-dialog-title" onClose={handleClose}>{data && data[0]}</DialogTitle>
        <DialogContent>
          <AppBar position="static" color="default">
            <Tabs
              value={tab}
              onChange={handleTab}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Details" />
              <Tab label="Reports" />
              <Tab label="Applications" />
              <Tab label="Claims" />
            </Tabs>
          </AppBar>
          {tab === 0 && <TabContainer><Details /></TabContainer>}
          {tab === 1 && <TabContainer><Reports /></TabContainer>}
          {tab === 2 && <TabContainer><Applications /></TabContainer>}
          {tab === 3 && <TabContainer><Claims /></TabContainer>}
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
