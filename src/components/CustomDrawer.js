import '../styling/CustomDrawer.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    FormControlLabel,
    Switch
} from '@material-ui/core';

import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';


const navList = [
    {
        url: "/",
        title: "Home",
        IconComponent: HomeIcon
    },
    {
        url: "/about",
        title: "About Me",
        IconComponent: AccountCircleIcon
    },
    {
        url: "/projects",
        title: "Projects",
        IconComponent: MovieIcon
    },
    {
        url: "/contact",
        title: "Contact Me",
        IconComponent: PhoneIcon
    }
];

const generateListItem = (url, title, IconComponent) => {
    return (
        <Link to={url} title={title} key={title} className="unstyled-link">
            <ListItem button>
                <ListItemIcon><IconComponent /></ListItemIcon>
                <ListItemText primary={title} style={{ paddingRight: '20px' }} />
            </ListItem>
        </Link>
    );
};

const itemList = () => {
    return (
        <div>
            <List>
                {navList.map((item) => generateListItem(item.url, item.title, item.IconComponent) )}
            </List>
        </div>
    );
};

const CustomDrawer = ({ drawerState, closeDrawer, toggleDarkMode, isDarkTheme }) => {
    return (
        <Drawer anchor='left' open={drawerState} onClose={closeDrawer} >
            <div className="drawer-wrapper">
                <div>
                    {itemList()}
                </div>
                <div className="bottom-content">
                    <FormControlLabel
                        control={<Switch checked={isDarkTheme} onChange={toggleDarkMode} />}
                        label="Dark Theme"
                    />
                </div>
            </div>
        </Drawer>
    );
};

export default CustomDrawer;