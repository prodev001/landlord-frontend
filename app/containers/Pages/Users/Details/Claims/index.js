import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getClaimAction } from 'leap-redux/actions/userActions';
import ClaimsTable from './claimsTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const Claims = (props) => {
  const { data } = props;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getClaimAction(data.landlord_id));
  // }, []);

  return (
    <div>
      <ClaimsTable />
    </div>
  );
};

Claims.propTypes = {
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(Claims);
