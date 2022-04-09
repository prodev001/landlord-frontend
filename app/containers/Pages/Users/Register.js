import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { RegisterForm } from 'leap-components';
import styles from 'leap-components/Forms/user-jss';

import { registerStart } from 'leap-redux/actions/authActions';

function Register(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.getIn(['auth', 'currentUser']));

  // Redirect login page to the application pages according to the user role data
  useEffect(() => {
    console.log(user);
    if (user) {
      history.push('/');
    }
  }, [user]);

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
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
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
