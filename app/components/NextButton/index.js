import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import {
  Grid,
  Button,
  Typography
} from '@material-ui/core';
import menudata from 'leap-api/ui/menu';


const NextBack = (props) => {
  /*
    @back - prior page index
    @next - next page index
    @handleClick - save page data function
    @openSubMenu - action call to set active menu state
  */
  const {
    back,
    next,
    handleClick,
    openSubMenu
  } = props;
  const userRole = useSelector(state => state.getIn(['authReducer', 'role']));
  const clientId = useSelector(state => state.getIn(['ui', 'clientId']));
  const history = useHistory();

  const onClick = (value) => {
    const data = userRole === 'external' ? menudata[4] : menudata[2];
    // creating client info pages link from menu data link ex: client/5/introduction
    history.push(`/client/${clientId}/${data[value].linkParent}`);
    openSubMenu(data[value].key);
    handleClick();
  };
  return (
    <Grid container justify="center">
      <Button
        variant="contained"
        color="primary"
        className="m-2"
        disabled={back === -1}
        onClick={() => onClick(back)}
      >
        <Typography variant="h5" className="fw-bolder p-1">BACK</Typography>
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="m-2"
        disabled={next === -1}
        onClick={() => onClick(next)}
      >
        <Typography variant="h5" className="fw-bolder p-1">NEXT</Typography>
      </Button>
    </Grid>
  );
};

NextBack.propTypes = {
  back: PropTypes.number.isRequired,
  next: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  openSubMenu: PropTypes.func.isRequired
};
const openAction = (key, keyParent) => ({ type: 'OPEN_SUBMENU', key, keyParent });

const mapDispatchToProps = dispatch => ({
  openSubMenu: bindActionCreators(openAction, dispatch)
});

export default connect(null, mapDispatchToProps)(NextBack);
