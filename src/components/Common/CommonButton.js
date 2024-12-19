import React from 'react';
import { Button, Grid, Typography, Fab, ToggleButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CommonButton = ({
    variant = 'contained', 
    color = 'primary', 
    text, 
    startIcon, 
    endIcon, 
    onClick, 
    disabled, 
    size, 
    children
}) => (
    <Button
        variant={variant}
        color={color}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        disabled={disabled}
        size={size}
    >
        {children || text}        
    </Button>
);

const ButtonsPage = () => {
    return (
        <div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
            <Grid container spacing={3} sx={{ padding: '16px' }}>
                {/* Section for Contained Buttons */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6">Contained Buttons</Typography>
                    <CommonButton text="Book Apointment" />
                    <CommonButton text="Submit Health Info" color="secondary" />
                </Grid>

                {/* Section for Outlined Buttons */}
                <Grid item xs={12}>
                    <Typography variant="h6">Outlined Buttons</Typography>
                    <CommonButton text="Learn More" variant="outlined" />
                    <CommonButton text="View History" variant="outlined" color="secondary" />
                </Grid>

                {/* Section for Text Buttons */}
                <Grid item xs={12}>
                    <Typography variant="h6">Text Buttons</Typography>
                    <CommonButton text="Cancel" variant='text' />
                    <CommonButton text="Forgot Password?" variant="text" color="secondary" />
                </Grid>

                {/* Section for Icon Buttons */}
                <Grid item xs={12}>
                    <Typography variant="h6">Icon Buttons</Typography>
                    <CommonButton
                        text="Add to Favorites"
                        startIcon={<FavoriteIcon />}
                        color="error"
                    />
                    <CommonButton
                        text="Download Report"
                        startIcon={<DownloadIcon />}
                        color="primary"
                    />    
                </Grid>

                {/* Section for Floating Action Buttons */}
                <Grid item xs={12}>
                    <Typography variant="h6">Floating Action Buttons</Typography>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit"></Fab>
                </Grid>

                {/* Section for Toggle Buttons */}
                <Grid item xs={12}>
                    <Typography variant="h6">Toggle Buttons</Typography>
                    <ToggleButton value="metric" selected>
                        Metric
                    </ToggleButton>
                    <ToggleButton value="imperial">
                        Imperial
                    </ToggleButton>
                </Grid>

                {/* Section for Disabled Buttons */}
                <Grid item xs={12}>
                    <Typography variant="h6">Disables Buttons</Typography>
                    <CommonButton text="Coming Soon" variant="contained" disabled />
                    <CommonButton text="unavailable" variant="outlined" disabled />
                </Grid>  
            </Grid>
        </div>          
    );
};

export default ButtonsPage;