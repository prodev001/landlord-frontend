import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'leap-components';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import DetailModal from './details';
import { applicationColumns } from '../../help';
import styles from '../../styles';

const ApplicationsTable = (props) => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [showModal, setModalShow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchValue, setSearch] = useState('');

  const applications = useSelector(state => state.getIn(['property', 'application']));
  useEffect(() => {
    const data = [];
    if (applications) {
      for (let index = 0; index < 10; index++) {
        applications.toJS().data.forEach(app => {
          data.push([
            app.stage,
            app.app_type,
            app.rider_id,
            app.name,
            app.gross_monthly_rent,
            app.gross_annual_rent,
            app.lease_start_date,
            app.lease_end_date,
            app.active_lease,
            app.total_number_of_tenants
          ]);
        });
      }
    }
    setTableData(data);
  }, [applications]);

  const handleQuickButton = (event) => {
    setAnchorEl(event.currentTarget);
    setModalShow(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleRowClick = (cellMeta) => {
    setRowData(applications.toJS().data[cellMeta.dataIndex]);
  };

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    rowsPerPage: 10,
    page: 0,
    searchProps: {
      onBlur: (e) => {
        console.log(e.target.value);
      },
      // onKeyUp: (e) => {
      //   console.log(e);
      // }
    },
    onCellClick: ((colData, cellMeta) => {
      if (cellMeta.colIndex !== 10) {
        setModalShow(true);
      }
      handleRowClick(cellMeta);
    }),
    selectableRowsHideCheckboxes: true,
  };

  return (
    <div className={classes.table}>
      {tableData
      && (
      <>
        <MUIDataTable
          title=""
          data={tableData}
          columns={applicationColumns(handleQuickButton, classes)}
          options={options}
        />
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>File a Cliam</MenuItem>
          <MenuItem onClick={handleMenuClose}>Download Insurance</MenuItem>
        </Menu>
      </>
      )
      }
      {rowData && <DetailModal show={showModal} data={rowData} handleClose={() => setModalShow(false)} />}
    </div>
  );
};

ApplicationsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicationsTable);
