import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getAppAction } from 'leap-redux/actions/userActions';
import ApplicationsTable from './applicationsTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const Applications = (props) => {
  const { data } = props;
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getAppAction(data.landlord_id));
  //   }, []);

  return (
    <div>
      <ApplicationsTable />
    </div>
  );
};

Applications.propTypes = {
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(Applications);
