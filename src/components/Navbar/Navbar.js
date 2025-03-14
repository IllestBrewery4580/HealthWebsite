import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from '../consts/NavbarItems'; // Ensure this is imported correctly
import  { Link, useNavigate } from 'react-router-dom';
import { navbarStyles } from './styles';
import { NavLink } from 'react-router-dom';

const Navbar = ({ items }) => {
  const Navigate = useNavigate(); 
    const drawerWidth = 220;


    return (
        <Drawer
        sx={{
          ...navbarStyles.drawer,
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#000B2D',
            color: 'rgba(255, 255, 255, 1)',
          },
        }}
        variant="permanent"
        anchor="left"
      >  
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem 
              button 
              key={item.id}
              component={NavLink}
              to={`/${item.route}`}
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#003366' : 'transparent', // Highlight active tab
                color: isActive? 'white' : 'rgba(255, 255, 255, 0.8)', // White for active items and slightly faded white for inactive
                textDecoration: 'none',
              })}   
            >
                {/* Link component for navigation  */}
              <ListItemButton component ={Link} to={'/${item.route}'}>
                {/* Render the icon for the item */}
                <ListItemIcon sx={navbarStyles.icons}>
                  {item.icon}
                  </ListItemIcon>
                {/* Render the label from the item */}
                <ListItemText sx={navbarStyles.txt} primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
};

export default Navbar;