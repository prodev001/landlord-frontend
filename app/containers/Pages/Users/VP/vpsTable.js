import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { getAppAction, getClaimAction } from 'leap-redux/actions/propertyActions';

import DetailModal from './Details';
import { buildingColumns } from '../../help';
import styles from '../../styles';

function BuildingsTable(props) {
  const { classes } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [showModal, setModalShow] = useState(false);
  const [tableData, setTableData] = useState([]);

  const buildings = useSelector(state => state.getIn(['property', 'building']));
  const dispatch = useDispatch();

  useEffect(() => {
    const data = [];
    if (buildings) {
      buildings.toJS().data.forEach(building => {
        data.push([
          building.name,
          building.building_type,
          building.phone,
          building.billingStreet,
          building.primary_contact,
          building.email_address,
          building.total_of_units,
          building.student_housing,
          building.landlord_name
        ]);
      });
    }
    setTableData(data);
  }, [buildings]);

  const handleQuickButton = (event) => {
    setAnchorEl(event.currentTarget);
    setModalShow(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRowClick = (cellMeta) => {
    const buildingId = buildings.toJS().data[cellMeta.dataIndex].building_id;
    setRowData(buildings.toJS().data[cellMeta.dataIndex]);
    dispatch(getAppAction(buildingId));
    dispatch(getClaimAction(buildingId));
  };

  const handleTablePage = (page, rows) => {
    console.log((page + 1) * rows);
    // setCurrentPage(page);
  };

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 30, 40, 50],
    page: 0,
    jumpToPage: true,
    selectableRows: false,
    onCellClick: ((colData, cellMeta) => {
      handleRowClick(cellMeta);
      if (cellMeta.colIndex !== 9) {
        setModalShow(true);
      }
    }),
    onTableChange: (action, tableState) => {
      switch (action) {
        case 'changePage':
          handleTablePage(tableState.page, tableState.rowsPerPage);
          break;
        case 'changeRowsPerPage':
          handleTablePage(tableState.page, tableState.rowsPerPage);
          break;
        default:
          console.log('action not handled.');
      }
    }
  };

  return (
    <div className={classes.table}>
      <MUIDataTable
        title=""
        data={tableData}
        columns={buildingColumns(handleQuickButton, classes)}
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
      <DetailModal show={showModal} data={rowData} handleClose={() => setModalShow(false)} />
    </div>
  );
}

BuildingsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BuildingsTable);
