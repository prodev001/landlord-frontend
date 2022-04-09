import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'leap-components';
import styles from 'leap-components/Forms/user-jss';
import { logInStart } from 'leap-redux/actions/authActions';

function LoginPage(props) {
  const history = useHistory();
  const user = useSelector(state => state.getIn(['auth', 'currentUser']));

  // Redirect login page to the application pages according to the user role data
  useEffect(() => {
    console.log(user);
    if (user) {
      history.push('/');
    }
  }, [user]);

  const dispatch = useDispatch();
  // Call login redux action when submitting the login form
  const submitForm = async (values) => {
    try {
      // console.log(values.get('password'), values.get('email'));
      const payload = {
        email: values.get('email'),
        password: values.get('password')
      };
      dispatch(logInStart(payload));
    } catch (err) {
      console.log(err);
    }
  };

  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
          <LoginForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);
