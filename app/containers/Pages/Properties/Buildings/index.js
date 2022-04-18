import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'leap-components';
import { getBuildingAction } from 'leap-redux/actions/propertyActions';
import BuildingsTable from './buildingsTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function Building() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBuildingAction());
  }, []);

  return (
    <div>
      <PapperBlock whiteBg icon="ion-ios-clipboard-outline" title="Buildings List" desc="This table shows the list of all buildings">
        <BuildingsTable />
      </PapperBlock>
    </div>
  );
}

export default withStyles(styles)(Building);
