import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect, useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { Field, reduxForm, change } from 'redux-form/immutable';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';

import brand from 'leap-api/dummy/brand';
import logo from 'leap-images/logo.png';
import { emailVerify } from 'leap-redux/actions/authActions';
import {
  TextFieldRedux, CheckboxRedux, RadioRedux, SelectRedux
} from './ReduxFormMUI';
import styles from './user-jss';
// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.get('password')) {
    return 'Passwords dont match';
  }
  return undefined;
};

  const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
    return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function RegisterForm(props) {
  const {
    classes,
    handleSubmit,
    pristine,
    submitting,
    deco
  } = props;

  const userInfo = useSelector(state => state.getIn(['auth', 'userInfo']));
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(change('registerForm', 'role', userInfo.get('role')));
    }
  }, [userInfo]);

  const handleEmail = (e) => {
    const inputdata = e.target.value;
    if (!email(inputdata)) {
      dispatch(emailVerify(inputdata));
    }
  };

  console.log(userInfo, 'userinfo');

  return (
    <Paper className={classNames(classes.sideWrap, deco && classes.petal)}>
      <Hidden smDown>
        <div className={classes.topBar}>
          <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/login">
            <Icon className={classes.icon}>arrow_forward</Icon>
              Already have account ?
          </Button>
        </div>
      </Hidden>
      <Typography variant="h4" className={classes.title} gutterBottom>
          Register
      </Typography>
      <section className={classes.pageFormSideWrap}>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="email"
                component={TextFieldRedux}
                placeholder="Your Email"
                type="email"
                label="Your Email"
                required
                validate={[required, email]}
                className={classes.field}
                onBlur={(e) => handleEmail(e)}
              />
            </FormControl>
          </div>
          <div className="d-flex align-items-center">
            <FormControl className={classes.formControl}>
              <Field
                model={userInfo && userInfo.get('role')}
                name="role"
                component={TextFieldRedux}
                placeholder="User Role"
                label="Role"
                type="text"
                required
                className={classes.field}
                props={{ disabled: !userInfo }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="name"
                component={TextFieldRedux}
                placeholder="Username"
                label="Username"
                type="text"
                required
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="password"
                component={TextFieldRedux}
                type="password"
                label="Your Password"
                required
                validate={[required, passwordsMatch]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="passwordConfirm"
                component={TextFieldRedux}
                type="password"
                label="Re-type Password"
                required
                validate={[required, passwordsMatch]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControlLabel
              control={(
                <Field name="agree" component={CheckboxRedux} required className={classes.agree} />
              )}
              label="Agree with"
            />
            <a href="#" className={classes.link}>Terms &amp; Condition</a>
          </div>
          <div className={classes.btnArea}>
            <Button variant="contained" color="primary" type="submit">
                  Continue
              <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
            </Button>
          </div>
        </form>
      </section>
    </Paper>
  );
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const RegisterFormReduxed = reduxForm({
  form: 'registerForm',
  enableReinitialize: true,
})(RegisterForm);

const reducer = 'ui';
const RegisterFormMapped = connect(
  state => ({
    force: state,
    deco: state.getIn([reducer, 'decoration'])
  }),
)(RegisterFormReduxed);

export default withStyles(styles)(RegisterFormMapped);
