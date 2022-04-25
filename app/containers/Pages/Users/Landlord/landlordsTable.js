import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { getAppAction, getClaimAction, getBuildingAction } from 'leap-redux/actions/userActions';

import DetailModal from '../Details';
import { landlordColumns } from '../../help';
import styles from '../../styles';

function BuildingsTable(props) {
  const { classes } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [showModal, setModalShow] = useState(false);
  const [tableData, setTableData] = useState([]);

  const landlords = useSelector(state => state.getIn(['user', 'landlord']));
  const dispatch = useDispatch();

  useEffect(() => {
    const data = [];
    if (landlords) {
      landlords.toJS().data.forEach(landlord => {
        const address = (landlord.billingStreet || '') + ' ' + (landlord.billingCity || '') + ' ' + (landlord.billingState || '') + ' ' + (landlord.billingPostalCode || '');
        data.push([
          landlord.name,
          landlord.phone,
          landlord.primary_contact,
          address,
          landlord.email_address,
          landlord.number_of_residential_buildings,
          landlord.number_of_units,
          new Date(landlord.sf_createdDate).toISOString().slice(0, 10),
        ]);
      });
    }
    setTableData(data);
  }, [landlords]);

  const handleQuickButton = (event) => {
    setAnchorEl(event.currentTarget);
    setModalShow(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRowClick = (cellMeta) => {
    const landlordId = landlords.toJS().data[cellMeta.dataIndex].landlord_id;
    setRowData(landlords.toJS().data[cellMeta.dataIndex]);
    dispatch(getAppAction(landlordId));
    dispatch(getClaimAction(landlordId));
    dispatch(getBuildingAction(landlordId));
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
        columns={landlordColumns(handleQuickButton, classes)}
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
