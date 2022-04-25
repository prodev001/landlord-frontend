import React from 'react';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import { Typography, Button } from '@material-ui/core';

export const applicationColumns = (handleQuickButton, classes) => [
  {
    name: 'Stage',
    options: {
      filter: true,
      customBodyRender: (value) => {
        if (value) {
          if (value.includes('00')) {
            return (
              <div className="d-flex align-items-center">
                <div className={classNames(classes.stage_tag, classes.purple)} />
                {value}
              </div>
            );
          }
          if (value.includes('01')) {
            return (
              <div className="d-flex align-items-center">
                <div className={classNames(classes.stage_tag, classes.deepPurple)} />
                {value}
              </div>
            );
          }
          if (value.includes('02')) {
            return (
              <div className="d-flex align-items-center">
                <div className={classNames(classes.stage_tag, classes.indigo)} />
                {value}
              </div>
            );
          }
          if (value.includes('03')) {
            return (
              <div className="d-flex align-items-center">
                <div className={classNames(classes.stage_tag, classes.pink)} />
                {value}
              </div>
            );
          }
          if (value.includes('04')) {
            return (
              <div className="d-flex align-items-center">
                <div className={classNames(classes.stage_tag, classes.blue)} />
                {value}
              </div>
            );
          }
          if (value.includes('05')) {
            return (
              <div className="d-flex align-items-center">
                <div className={classNames(classes.stage_tag, classes.lightBlue)} />
                {value}
              </div>
            );
          }
          if (value.includes('06')) {
            return (
              <div className="d-flex align-items-center">
                <div className={classNames(classes.stage_tag, classes.red)} />
                {value}
              </div>
            );
          }
          if (value.includes('Cancelled')) {
            return (
              <div className="d-flex align-items-center">
                <div className={classNames(classes.stage_tag, classes.pink)} />
                {value}
              </div>
            );
          }
          return (<Typography variant="body2">{value}</Typography>);
        }
        return (<Chip label="unknown" />);
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
          return (<Chip label={<Typography variant="h6">EP</Typography>} color="primary" />);
        }
        return (<Chip label="unknown" />);
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
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Gross Annual Rent',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Lease Start Date',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Lease End Date',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Active Rease',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Total Tenants',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
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
            <Typography variant="caption">
                    Quick Action
            </Typography>
          </Button>
        </div>
      )

    }
  },
];


export const buildingColumns = (handleQuickButton, classes) => [
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
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Students',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
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


export const claimColumns = (handleQuickButton, classes) => [
  {
    name: 'Status',
    options: {
      filter: true,
      customBodyRender: (value) => {
        if (value.includes('Closed')) {
          return (
            <div className="d-flex align-items-center">
              <div className={classNames(classes.stage_tag, classes.pink)} />
              {value}
            </div>
          );
        }
        if (value.includes('Open')) {
          return (
            <div className="d-flex align-items-center">
              <div className={classNames(classes.stage_tag, classes.indigo)} />
              {value}
            </div>
          );
        }
        if (value.includes('ReOpened')) {
          return (
            <div className="d-flex align-items-center">
              <div className={classNames(classes.stage_tag, classes.deepPurple)} />
              {value}
            </div>
          );
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
    name: 'Tenant Name',
    options: {
      filter: true,
    }
  },
  {
    name: 'Gross Monthly Rent',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  // {
  //   name: 'Gross Annual Rent',
  //   options: {
  //     filter: true,
  //   }
  // },
  {
    name: 'Total Indemnity Payments',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Bond Issue Date',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Landlord Name',
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

export const landlordColumns = (handleQuickButton, classes) => [
  {
    name: 'Account Name',
    options: {
      filter: true,
    }
  },
  {
    name: 'Phone',
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
    name: 'Address',
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
    name: 'Number Of Buildings',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Number Of Units',
    options: {
      filter: true,
      customBodyRender: (value) => (<Typography align="center" variant="body1">{value}</Typography>)
    }
  },
  {
    name: 'Date Created',
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
            <Typography variant="caption">
                    Quick Action
            </Typography>
          </Button>
        </div>
      )

    }
  },
];
