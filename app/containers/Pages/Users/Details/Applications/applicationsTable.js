import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { getAppAction, getClaimAction } from 'leap-redux/actions/userActions';
import DetailModal from './details';
import styles from '../../../styles';
import { applicationColumns } from '../../../help';

const ApplicationsTables = (props) => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [showModal, setModalShow] = useState(false);
  const [tableData, setTableData] = useState([]);

  const applications = useSelector(state => state.getIn(['user', 'application']));

  useEffect(() => {
    const appData = [];
    if (applications) {
      applications.toJS().data.forEach(app => {
        appData.push([
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
    setTableData(appData);
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
      {rowData && <DetailModal show={showModal} data={rowData} handleClose={() => setModalShow(false)} />}
    </div>
  );
};

ApplicationsTables.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicationsTables);
