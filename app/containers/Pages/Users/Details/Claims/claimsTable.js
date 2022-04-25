import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import classNames from 'classnames';
import { PapperBlock } from 'leap-components';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import DetailModal from './details';
import styles from '../../../styles';
import { claimColumns } from '../../../help';

const ClaimsTable = (props) => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [showModal, setModalShow] = useState(false);
  const [tableData, setTableData] = useState([]);

  const claims = useSelector(state => state.getIn(['user', 'claim']));

  useEffect(() => {
    const data = [];
    if (claims) {
      claims.toJS().data.forEach(claim => {
        data.push([
          claim.claim_status,
          claim.app_type,
          claim.rider_id,
          claim.account_name,
          claim.tenant1_lease,
          claim.monthly_rent,
          claim.rider_gross_annual_rent,
          claim.total_indemnity_payments,
          claim.bond_issue_date,
          claim.landlord_name,
        ]);
      });
    }
    setTableData(data);
  }, [claims]);

  const handleQuickButton = (event) => {
    setAnchorEl(event.currentTarget);
    setModalShow(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleRowClick = (cellMeta) => {
    setRowData(claims.toJS().data[cellMeta.dataIndex]);
  };

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    rowsPerPage: 10,
    page: 0,
    selectableRowsHideCheckboxes: true,
    onCellClick: ((colData, cellMeta) => {
      if (cellMeta.colIndex !== 9) {
        setModalShow(true);
      }
      handleRowClick(cellMeta);
    })
  };

  return (
    <div className={classes.table}>
      <MUIDataTable
        title=""
        data={tableData}
        columns={claimColumns(handleQuickButton, classes)}
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
      {rowData && <DetailModal show={showModal} data={rowData} handleClose={() => setModalShow(false)} />}
    </div>
  );
};

ClaimsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClaimsTable);
