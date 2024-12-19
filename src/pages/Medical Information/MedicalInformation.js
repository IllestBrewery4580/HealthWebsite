import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const MedicalInformation = () => {
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

    return (
        <Grid container spacing={2} style={{ padding: '16px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
            {/* Header */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography variant="h4" style={{ color: '#1976d2' }}>
                    Medical Information
                </Typography>
                <Typography variant="subtitle1" style={{ color: '#666' }}>
                    Manage your health data and records easily.
                </Typography>
            </Grid>

            {/* Form */}
            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                <Grid item xs={6}>
                    <TextField fullWidth label="First Name" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Last Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Medical Conditions"
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </Grid>
            </Grid>

            {/* Buttons */}
            <Grid item xs={12} style={{ marginTop: '16px', textAlign: 'center' }}>
                <CommonButton variant="contained" sx={buttonStyles}>
                    Submit
                </CommonButton>
                <CommonButton variant="outlined" sx={buttonStyles} style={{ marginLeft: '8px' }}>
                    Reset
                </CommonButton>
            </Grid>

            {/* Table */}
            <Grid item xs={12} style={{ marginTop: '16px' }}>
                <Typography variant="h6" style={{ color: '#1976d2', marginBottom: '8px' }}>
                    Patient Records
                </Typography>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#e3f2fd' }}>
                        <tr>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Condition</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>John Doe</td>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Diabetes</td>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                                <CommonButton variant="contained" sx={buttonStyles}>
                                    Edit
                                </CommonButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Grid>

            {/* Footer */}
            <Grid item xs={12} style={{ textAlign: 'center', marginTop: '32px' }}>
                <Typography variant="body2" style={{ color: '#666' }}>
                    &copy; {new Date().getFullYear()} HealthCare Inc. All rights reserved.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default MedicalInformation;