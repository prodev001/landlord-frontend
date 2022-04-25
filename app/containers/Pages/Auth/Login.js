import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
// matrial components
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
// leap components
import { LoginForm } from 'leap-components';
import styles from 'leap-components/Forms/user-jss';
import { logInStart } from 'leap-redux/actions/authActions';
import brand from 'leap-api/dummy/brand';

function Login(props) {
  const history = useHistory();
  const user = useSelector(state => state.getIn(['auth', 'currentUser']));

  // Redirect login page to the application pages according to the user role data
  useEffect(() => {
    if (user) {
      history.push('/dashboard');
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
    <div className={classes.rootFull}>
      <div className={classes.containerSide}>
        <Hidden smDown>
          <div className={classes.opening}>
            <Typography variant="h3" component="h1" className={classes.opening} gutterBottom>
              Welcome to&nbsp;
              {brand.name}
            </Typography>
            <Typography variant="h6" component="p" className={classes.subpening}>Please sign in to continue</Typography>
          </div>
        </Hidden>
        <div className={classes.sideFormWrap}>
          <LoginForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
