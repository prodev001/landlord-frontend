import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import brand from 'leap-api/dummy/brand';
import logo from 'leap-images/logo.png';
import { setClientIdAction } from 'leap-redux/actions/uiActions';
import MainMenu from './MainMenu';

import styles from './sidebar-jss';

function SidebarContent(props) {
  const [transform, setTransform] = useState(0);
  const dispatch = useDispatch();
  const handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    setTransform(scroll);
  };

  useEffect(() => {
    const mainContent = document.getElementById('sidebar');
    mainContent.addEventListener('scroll', handleScroll);
    return () => {
      mainContent.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {
    classes,
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    mode,
    role
  } = props;

  return (
    <div className={classNames(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
      <div className={classes.drawerHeader}>
        <NavLink
          to="/"
          className={classNames(classes.brand, classes.brandBar, turnDarker && classes.darker)}
          onClick={() => dispatch(setClientIdAction(null))}
        >
          {role === 'external'
            ? <img src={logo} alt={brand.name} />
            : (
              <>
                {mode === 'dark' ? <img src={logo} alt={brand.name} /> : <img src={logo} alt={brand.name} /> }
              </>
            )
          }
        </NavLink>
      </div>
      <div
        id="sidebar"
        className={
          classNames(
            classes.menuContainer,
            leftSidebar && classes.rounded
          )
        }
      >
        <MainMenu loadTransition={loadTransition} role={role} dataMenu={dataMenu} toggleDrawerOpen={toggleDrawerOpen} />
      </div>
    </div>
  );
}

SidebarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
  mode: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  anchorEl: null,
  isLogin: true,
};

export default withStyles(styles)(SidebarContent);
