import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'leap-components';
import { getRMAction } from 'leap-redux/actions/userActions';
// import RmsTable from './rmsTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const RegionalManager = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRMAction());
  }, []);

  return (
    <div>
      <PapperBlock whiteBg icon="ion-ios-clipboard-outline" title="Buildings List" desc="This table shows the list of all buildings">
        {/* <RmsTable /> */}
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(RegionalManager);
