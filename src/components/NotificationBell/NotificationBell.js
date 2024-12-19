import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const NotificationBell = ({ iconColor = "default", badgeContent = 0 }) => {
    const newNotifications = `You have ${badgeContent} new notification${badgeContent > 1 ? 's' : ''}.`;
    const noNotifications = 'No new notifications';
  
    return (
      <Tooltip title={badgeContent ? newNotifications : noNotifications}>
        <IconButton color={iconColor}>
          <Badge badgeContent={badgeContent} color="primary">
            <NotificationsActiveIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    );
  };

export default NotificationBell;