import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { getBuildingAction } from 'leap-redux/actions/propertyActions';
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
          height: 60,
          padding: theme.spacing(1),
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  },
  chip: {
    marginLeft: theme.spacing(3)
  }
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
function BuildingsTable(props) {
  const { classes } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [showModal, setModalShow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [numberOfRows, setNumberOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const property = useSelector(state => state.getIn(['property', 'building']));
  const dispatch = useDispatch();

  useEffect(() => {
    // const data = [];
    // if (property.toJS().data) {
    //   property.toJS().data.forEach(building => {
    //     data.push([
    //       building.name,
    //       building.building_type,
    //       building.phone,
    //       building.billingStreet,
    //       building.primary_contact,
    //       building.email_address,
    //       building.total_of_units,
    //       building.student_housing,
    //       building.landlord_name
    //     ]);
    //   });
    // }
    const data = [
      ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
      ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
      ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
      ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
      ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
      ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
      ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
      ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
      ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
      ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
      ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
      ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
      ['HELiX Starkville', 'Auto Enroll', '662 - 617 - 8100', '100 Dawg Drive', 'Edge on Oak - UCAL, LLC', 'minneapoliseastbank@yugo.com', 29, 'TRUE', 'Homestead U'],
      ['Yugo Minneapolis East Bank - Edge on Oak', 'Event Process', '612-843-2222', '313 Oak Street SE', 'IREC CPP Miss St LLC', 'helixstarkville@livehahu.com', 55, 'FALSE', 'Yugo'],
    ];
    setTableData(data);
    // if() {
    //   dispatch(getBuildingAction());
    // }
  }, [property]);

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
      name: 'Account',
      options: {
        filter: true,
      }
    },
    {
      name: 'Building Type',
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value === 'Auto Enroll') {
            return (<Chip label={<Typography variant="h6">AE</Typography>} color="secondary" className={classes.chip} />);
          }
          if (value === 'Event Process') {
            return (<Chip label={<Typography variant="h6">EP</Typography>} color="primary" className={classes.chip} />);
          }
          return (<Chip label="Unknown" />);
        }
      }
    },
    {
      name: 'Phone',
      options: {
        filter: true,
      }
    },
    {
      name: 'Address',
      options: {
        filter: true,
      }
    },
    {
      name: 'Primary Contact',
      options: {
        filter: true,
      }
    },
    {
      name: 'Email',
      options: {
        filter: true,
      }
    },
    {
      name: 'Total # Units',
      options: {
        filter: true,
      }
    },
    {
      name: 'Students',
      options: {
        filter: true,
      }
    },
    {
      name: 'Landlord',
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

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    print: false,
    search: false,
    filter: false,
    download: false,
    viewColumns: false,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 30, 40, 50],
    page: 0,
    onCellClick: ((colData, cellMeta) => {
      if (cellMeta.colIndex !== 9) {
        setModalShow(true);
      }
      handleRowClick(cellMeta);
    }),
    onChangePage(currentPage) {
      setCurrentPage({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      setNumberOfRows({ numberOfRows });
    }
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
}

BuildingsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BuildingsTable);
