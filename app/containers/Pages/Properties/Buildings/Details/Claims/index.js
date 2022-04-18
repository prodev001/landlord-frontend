import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { PapperBlock } from 'leap-components';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DetailModal from './Details';

const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all',
        padding: theme.spacing(1)
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          padding: theme.spacing(1),
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  },
  chip: {
    marginLeft: theme.spacing(4)
  },
  stage_chip: {
    height: '37px',
    borderRadius: '4px',
    width: '11px',
    marginRight: '11px'
  }
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
const Claims = (props) => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [showModal, setModalShow] = useState(false);
  const [tableData, setTableData] = useState([]);

  const property = useSelector(state => state.getIn(['property', 'application']));
  useEffect(() => {
    const data = [];
    for (let index = 0; index < 10; index++) {
      data.push([
        property.get('STAGE'),
        property.get('APPLICATION_TYPE'),
        property.get('RIDER_ID'),
        property.get('NAME'),
        property.get('GROSS_MONTHLY_RENT'),
        property.get('Total Indemnity Payment'),
        property.get('Net Payment Amt'),
        property.get('Builing'),
        property.get('Date Filed'),
      ]);
    }
    setTableData(data);
  }, []);

  const handleQuickButton = (event) => {
    setAnchorEl(event.currentTarget);
    setModalShow(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleRowClick = (cellMeta) => {
    setRowData(tableData[cellMeta.dataIndex]);
  };

  const columns = [
    {
      name: 'Stage',
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value.includes('00')) {
            return (
              <div>
                <Chip label="" color="secondary" className={classes.stage_chip} />
                {value}
              </div>
            );
          }
          if (value === 'Event Process') {
            return (<Chip label="EP" color="primary" />);
          }
          return (<Chip label="Unknown" />);
        }
      }
    },
    {
      name: 'Application Type',
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value === 'Rent Guaranty') {
            return (<Chip label={<Typography variant="h6">RG</Typography>} color="secondary" className={classes.chip} />);
          }
          if (value === 'Event Process') {
            return (<Chip label="EP" color="primary" />);
          }
          return (<Chip label="Unknown" />);
        }
      }
    },
    {
      name: 'RiderID',
      options: {
        filter: true,
      }
    },
    {
      name: 'Name',
      options: {
        filter: true,
      }
    },
    {
      name: 'Gross Monthly Rent',
      options: {
        filter: true,
      }
    },
    {
      name: 'Total Indemnity Payment',
      options: {
        filter: true,
      }
    },
    {
      name: 'Net Payment Amt',
      options: {
        filter: true,
      }
    },
    {
      name: 'Building',
      options: {
        filter: true,
      }
    },
    {
      name: 'Date Filed',
      options: {
        filter: true,
      }
    },
    {
      name: '',
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex, rowIndex) => (
          <div>
            <Button
              onClick={handleQuickButton}
              color="primary"
              variant="contained"
            >
                Quick Action
            </Button>
          </div>
        )

      }
    },
  ];

  // const data = [
  //   ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
  //   ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
  //   ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
  //   ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
  //   ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
  //   ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
  //   ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
  //   ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
  //   ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
  //   ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
  //   ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
  //   ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
  //   ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
  //   ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
  // ];

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    print: true,
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
        columns={columns}
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
};

Claims.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Claims);
