import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButton';
import { useNavigate } from 'react-router-dom';
import NotificationBell from '../../components/NotificationBell/NotificationBell';
import BasicMenu from '../../components/Common/BasicMenu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";

const Pulse = () => {
    const navigate = useNavigate();

    const containedButtonStyles = {
        fontSize: 20,
        fontWeight: 200,
        backgroundColor: '#1976d2', // Blue
        color: '#fff', // White text for visibility
        '&:hover': {
            backgroundColor: '#9c27b0', // Purple background on hover
        },
    };

    // Styles for the 'outlined' button (Name)
    const outlinedButtonStyles = {
        fontSize: 20,
        fontWeight: 200,
        color: '#d32f2f', // Red text color
        borderColor: '#2e7d32', // Green border color
        '&:hover': {
            backgroundColor: 'transparent',
        },
    };

    return (
        <Grid 
            container 
            spacing={2} 
            sx={{ padding: '16px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}
        >
            {/* Header Section */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#1976d2' }}>Pulse Dashboard</h1>
                <p style={{ color: '#666' }}>Stay updated and manage your activities in one place.</p>
            </Grid>

            {/* User Profile Section */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 56, height: 56, margin: 'auto' }}>A</Avatar>
                <Typography variant="h6" style={{ marginTop: '8px' }}>Hello, Alex</Typography>
            </Grid>

            {/* Notification Bell and Menu */}
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <NotificationBell iconColor="primary" badgeContent={3} /> {/* Dynamic badge count */}
                <BasicMenu />
            </Grid>

            {/* Information Cards */}
            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
                        <CardContent>
                            <Typography variant="h5">Recent Activity</Typography>
                            <Typography variant="body2">Check out your latest activity here.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#9c27b0', color: '#fff' }}>
                        <CardContent>
                            <Typography variant="h5">Messages</Typography>
                            <Typography variant="body2">View your recent messages and interactions.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#d32f2f', color: '#fff' }}>
                        <CardContent>
                            <Typography variant="h5">Tasks</Typography>
                            <Typography variant="body2">Manage your ongoing tasks and deadlines.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Action Buttons */}
            <Grid container spacing={2} style={{ marginTop: '16px', justifyContent: 'center' }}>
                <Grid item xs={4}>
                    <CommonButton
                        variant="contained"
                        sx={containedButtonStyles}
                        onClick={() => navigate('/search')}
                    >
                        Go to Search Page
                    </CommonButton>
                </Grid>
                <Grid item xs={4}>
                    <CommonButton  
                        variant="outlined" 
                        sx={outlinedButtonStyles}
                    >
                        Name
                    </CommonButton>
                </Grid>
            </Grid>

            {/* Footer Section */}
            <Grid item xs={12} style={{ textAlign: 'center', marginTop: '32px' }}>
                <p style={{ color: '#666' }}>All rights reserved. Pulse Dashboard 2024</p>
            </Grid>
        </Grid>
    );
};     

export default Pulse;