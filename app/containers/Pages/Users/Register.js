import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// material components
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
// leap components
import { RegisterForm } from 'leap-components';
import styles from 'leap-components/Forms/user-jss';
import { registerStart } from 'leap-redux/actions/authActions';

function Register(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.getIn(['auth', 'currentUser']));
  // Redirect login page to the application pages according to the user role data
  useEffect(() => {
    if (currentUser) {
      history.push('/dashboard');
    }
  }, [currentUser]);

  const submitForm = values => {
    const payload = {
      username: values.get('name'),
      email: values.get('email'),
      password: values.get('password'),
      role: values.get('role'),
    };
    dispatch(registerStart(payload));
  };
  const { classes } = props;
  return (
    <div className={classes.rootFull}>
      <div className={classes.containerSide}>
        <Hidden smDown>
          <div className={classes.opening}>
            <Typography variant="h3" component="h1" className={classes.opening} gutterBottom>Hi...nice to meet you</Typography>
            <Typography variant="h6" component="p" className={classes.subpening}>Just register to join with us</Typography>
          </div>
        </Hidden>
        <div className={classes.sideFormWrap}>
          <RegisterForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
