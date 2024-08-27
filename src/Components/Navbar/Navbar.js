import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import DrawerComp from './DrawerComp';
import pic from '../Images/Logo.png';
import click from '../Images/u_click.mp3';

const Navbar = () => {
  const [val, setVal] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setVal(0);
        break;
      case '/my-quiz':
        setVal(1);
        break;
      case '/play-quiz':
        setVal(2);
        break;
      default:
        setVal(0);
    }
  }, [location.pathname]);

  const handleTabChange = (event, newValue) => {
    new Audio(click).play();
    setVal(newValue);
  };

  return (
    <div className="navbar" style={{ marginBottom: '10px' }}>
      <AppBar elevation={5} sx={{ backgroundColor: 'white', height: '70px' }} position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '100%', alignItems: 'center' }}>
            {/* Logo */}
            <Box>
              <img src={pic} alt="logo" width="110" height="30" />
            </Box>

            {/* Condition for hamburger menu */}
            {isMatch ? (
              <DrawerComp />
            ) : (
              <>
                {/* Links */}
                <Tabs
                  indicatorColor="primary"
                  value={val}
                  onChange={handleTabChange}
                  aria-label="navigation tabs"
                >
                  <Tab label="Home" component={Link} to="/" />
                  <Tab label="My Quiz" component={Link} to="/my-quiz" />
                  <Tab label="Play Quiz" component={Link} to="/play-quiz" />
                </Tabs>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
