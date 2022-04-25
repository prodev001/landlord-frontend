import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'leap-components';
import { getClaimAction } from 'leap-redux/actions/propertyActions';
import ClaimsTable from './claimsTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function Claim() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClaimAction());
  }, []);

  return (
    <div>
      <PapperBlock whiteBg icon="ion-ios-clipboard-outline" title="Claims List" desc="This table shows the list of all buildings">
        <ClaimsTable />
      </PapperBlock>
    </div>
  );
}

export default withStyles(styles)(Claim);
