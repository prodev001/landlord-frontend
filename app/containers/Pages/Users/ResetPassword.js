import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ResetForm } from 'leap-components';
import styles from '../../../components/Forms/user-jss';

function ResetPassword(props) {
  const [valueForm, setValueForm] = useState(null);

  const submitForm = useCallback((values) => {
    setValueForm(values);
    setTimeout(() => {
      console.log(`You submitted:\n\n${valueForm}`); // eslint-disable-line
    }, 500); // simulate server latency
  }, [valueForm]);

  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
          <ResetForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResetPassword);
