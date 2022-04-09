import React from 'react';
import { PapperBlock, EmptyData } from 'leap-components';
import StrippedTable from './StrippedTable';

function BasicTable() {
  return (
    <div>
      <PapperBlock title="Table" whiteBg icon="ion-ios-menu-outline" desc="UI Table when no data to be shown">
        <div>
          <StrippedTable />
        </div>
      </PapperBlock>
      <PapperBlock title="Empty Table" whiteBg icon="ion-ios-square-outline" desc="They (allegedly) aid usability in reading tabular data by offering the user a coloured means of separating and differentiating rows from one another">
        <div>
          <EmptyData />
        </div>
      </PapperBlock>
    </div>
  );
}

export default BasicTable;
