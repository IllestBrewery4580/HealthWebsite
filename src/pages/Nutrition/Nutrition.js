import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import { Card, CardContent, Typography, TextField, Divider } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SpaIcon from '@mui/icons-material/Spa';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Nutrition = () => {
    const [userInput, setUserInput] = useState('');

    const buttonStyles = {
        fontSize: 20,
        fontWeight: 200,
        backgroundColor: '#1976d2', // Blue
        '&:hover': {
            backgroundColor: '#9c27b0', // Purple
        },
        '&.MuiButton-outlined': {
            color: '#d32f2f', // Red text color
            borderColor: '#2e7d32', // Green border color
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    return (
        <Grid container spacing={2} style={{ padding: '16px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
            {/* Header Section */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#1976d2' }}>Nutrition for a Better Life</h1>
                <p style={{ color: '#666' }}>Learn how to fuel your body and improve your overall well-being.</p>
            </Grid>

            {/* Interactive Form Section */}
            <Grid item xs={12}>
                <TextField
                    label="What's your nutrition goal?"
                    value={userInput}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your goal (e.g., weight loss, muscle gain)"
                    style={{ marginBottom: '16px' }}
                />
                <CommonButton
                    variant="contained"
                    sx={buttonStyles}
                >
                    Submit
                </CommonButton>
            </Grid>

            {/* Nutrition Tips Cards */}
            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#1976d2', color: '#ffffff' }}>
                        <CardContent>
                            <FastfoodIcon style={{ fontSize: 50 }} />
                            <Typography variant="h6">Eat Balanced Meals</Typography>
                            <Typography variant="body2">Include a variety of nutrients in each meal: protein, fiber, healthy fats, and complex carbs.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#9c27b0', color: '#ffffff' }}>
                        <CardContent>
                            <SpaIcon style={{ fontSize: 50 }} />
                            <Typography variant="h6">Stay Hydrated</Typography>
                            <Typography variant="body2">Drinking water helps maintain body temperature and aids digestion. Aim for at least 8 glasses a day.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#d32f2f', color: '#ffffff' }}>
                        <CardContent>
                            <LocalDiningIcon style={{ fontSize: 50 }} />
                            <Typography variant="h6">Eat More Whole Foods</Typography>
                            <Typography variant="body2">Limit processed foods and focus on fresh, whole foods for better energy and health.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Divider Section */}
            <Grid item xs={12}>
                <Divider style={{ margin: '20px 0' }} />
            </Grid>

            {/* Footer Section */}
            <Grid item xs={12} style={{ textAlign: 'center', marginTop: '32px' }}>
                <p style={{ color: '#666' }}>Take the first step to a healthier life. Keep track of your progress and stay committed!</p>
            </Grid>

            {/* Action Buttons */}
            <Grid container spacing={2} style={{ marginTop: '32px', justifyContent: 'center' }}>
                <Grid item xs={4}>
                    <CommonButton variant="contained" sx={buttonStyles}>Nutrition Guide</CommonButton>
                </Grid>
                <Grid item xs={4}>
                    <CommonButton variant="outlined" sx={buttonStyles}>Track Your Meals</CommonButton>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Nutrition;