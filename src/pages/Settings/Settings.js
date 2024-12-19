import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const SettingsWrapper = styled('div')(({ theme }) => ({
    padding: '24px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
}));

const Settings = () => {
    useEffect(() => {
        document.title = "Settings";
    }, []);

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
                <SettingsWrapper>
                    {/* Notification Badge */}
                    <Grid container justifyContent="flex-end" alignItems="center">
                    This is the Settings Page.
                        <Badge badgeContent={4} color="primary">
                            <NotificationsActiveIcon fontSize="large" />
                        </Badge>
                    </Grid>
                    
                    <Typography variant="h4" gutterBottom>
                        Settings
                    </Typography>
                    <Divider />

                    {/* User Profile Section */}
                    <Typography variant="h6" sx={{ marginTop: '24px' }}>
                        User Profile
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '8px' }}>
                        Full Name
                    </Typography>

                    {/* Privacy Section */}
                    <Typography variant="h6" sx={{ marginTop: '24px' }}>
                        Privacy Preferences
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '8px' }}>
                        Email
                    </Typography>
                </SettingsWrapper>
            </Grid>
        </Grid>
    );
};    


export default Settings;