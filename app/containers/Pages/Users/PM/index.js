import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'leap-components';
import { getPMAction } from 'leap-redux/actions/userActions';
// import PmsTable from './pmsTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const PropertyMananger = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPMAction());
  }, []);

  return (
    <div>
      <PapperBlock whiteBg icon="ion-ios-clipboard-outline" title="Buildings List" desc="This table shows the list of all buildings">
        {/* <PmsTable /> */}
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(PropertyMananger);
