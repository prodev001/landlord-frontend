import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'leap-components';
import { getAppAction } from 'leap-redux/actions/propertyActions';
import ApplicationsTable from './applicationsTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function Application() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppAction());
  }, []);

  return (
    <div>
      <PapperBlock whiteBg icon="ion-ios-clipboard-outline" title="Applications List" desc="This table shows the list of all buildings">
        <ApplicationsTable />
      </PapperBlock>
    </div>
  );
}

export default withStyles(styles)(Application);
