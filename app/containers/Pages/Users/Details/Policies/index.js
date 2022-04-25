import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getPolicyAction } from 'leap-redux/actions/userActions';
import PoliciesTable from './PoliciesTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const Policies = (props) => {
  const { data } = props;
  // const applications = useSelector(state => state.getIn(['user', 'application']));
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!applications) {
  //     dispatch(getPolicyAction(data.landlord_id));
  //   }
  // }, []);

  return (
    <div>
      <PoliciesTable />
    </div>
  );
};

Policies.propTypes = {
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(Policies);
