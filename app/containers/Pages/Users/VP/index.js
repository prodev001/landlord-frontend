import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'leap-components';
import { getVPAction } from 'leap-redux/actions/userActions';
// import VpsTable from './vpsTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const VicePresident = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVPAction());
  }, []);

  return (
    <div>
      <PapperBlock whiteBg icon="ion-ios-clipboard-outline" title="Buildings List" desc="This table shows the list of all buildings">
        {/* <VpsTable /> */}
      </PapperBlock>
    </div>
  );
};

export default withStyles(styles)(VicePresident);
