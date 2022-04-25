import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'leap-components';
import { getPolicyAction } from 'leap-redux/actions/propertyActions';
import PoliciesTable from './policiesTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function Policy() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPolicyAction());
  }, []);

  return (
    <div>
      <PapperBlock whiteBg icon="ion-ios-clipboard-outline" title="Policies List" desc="This table shows the list of all buildings">
        <PoliciesTable />
      </PapperBlock>
    </div>
  );
}

export default withStyles(styles)(Policy);
