import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getBuildingAction } from 'leap-redux/actions/userActions';
import BuildingsTable from './buildingsTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const Buildings = (props) => {
  const { data } = props;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getBuildingAction(data.landlord_id));
  // }, []);

  return (
    <div>
      <BuildingsTable />
    </div>
  );
};

Buildings.propTypes = {
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(Buildings);
