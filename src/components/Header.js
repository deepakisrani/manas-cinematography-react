import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import CustomDrawer from './CustomDrawer';

const Header = (props) => {
    const [drawerState, changeDrawerState] = useState(false);

    return (
        <AppBar position="static" color='transparent'>
            <Toolbar>
                <IconButton 
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => changeDrawerState(true)}
                >
                    <MenuIcon />
                </IconButton>
                
                <CustomDrawer 
                    drawerState={drawerState}
                    closeDrawer={() => changeDrawerState(false)}
                    toggleDarkMode={props.toggleDarkMode}
                    isDarkTheme={props.isDarkTheme}
                />
                <Link to="/" title="Manas Tiwari Home" className="unstyled-link">
                    <Typography variant="h6" component="div" align="right" style={{ justifyContent: 'flex-end' }} >
                        <strong>Manas Tiwari</strong>
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;