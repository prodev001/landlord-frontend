import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import 'fullcalendar-scheduler/main.min.css';
import styles from './widget-jss';

const FullCalendarWidget = (props) => {
  const { classes } = props;
  return (
    <Grid container justify="center" className="m-0">
      <Grid item lg={9} sm={9} md={9}>
        <div className={classes.calendar}>
          <FullCalendar
            schedulerLicenseKey="0135850896-fcs-1626717097"
            plugins={[resourceTimelinePlugin, interactionPlugin]}
            timeZone="UTC"
            initialView="resourceTimelineDay"
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
            }}
            editable
            resourceAreaHeaderContent="Rooms"
            resources="https://fullcalendar.io/demo-resources.json?with-nesting&with-colors"
            events="https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline"
            droppable
          />
        </div>
      </Grid>
    </Grid>
  );
};

FullCalendarWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullCalendarWidget);
