import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Modal, Box } from '@mui/material';

const Vaccines = () => {
    const [vaccineName, setVaccineName] = useState('');
    const [vaccineStatus, setVaccineStatus] = useState('');
    const [openModal, setOpenModal] = useState(false);
    
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    
    const buttonStyles = {
        fontSize: 20,
        fontWeight: 200,
        backgroundColor: '#1976d2', // Blue
        '&:hover' : {
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

    // Sample vaccine data (this can be dynamic or fetched from an API)
    const vaccines = [
        { name: 'COVID-19', status: 'administered' },
        { name: 'Flu', status: 'pending' },
        { name: 'Hepatitis B', status: 'due' },
    ];

    const handleAddVaccine = () => {
        // Logic to add the vaccine to a list or database
        console.log('Added vaccine:', vaccineName, vaccineStatus);
        setVaccineName('');
        setVaccineStatus('');
        handleCloseModal();
    };

    return (
        <Grid item xs={8} sx={{ backgroundColor: '#1976d2', padding: '16px' }}>
            <h2 style={{ color: '#fff' }}>Vaccines Page</h2>
            
            {/* Display a list of vaccines */}
            <div>
                <h3 style={{ color: '#fff' }}>Vaccine List</h3>
                <ul>
                    {vaccines.map((vaccine, index) => (
                        <li key={index} style={{ color: '#fff' }}>
                            <strong>{vaccine.name}</strong> - {vaccine.status}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Add a New Vaccine Button */}
            <CommonButton
                variant="contained"
                sx={buttonStyles}
                onClick={handleOpenModal}
            >
                Add New Vaccine
            </CommonButton>

            {/* Vaccine Modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="add-vaccine-modal"
                aria-describedby="form-to-add-new-vaccine"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '10px'
                }}>
                    <h2>Add New Vaccine</h2>
                    <TextField
                        label="Vaccine Name"
                        variant="outlined"
                        fullWidth
                        value={vaccineName}
                        onChange={(e) => setVaccineName(e.target.value)}
                        sx={{ marginBottom: '16px' }}
                    />
                    <FormControl fullWidth sx={{ marginBottom: '16px' }}>
                        <InputLabel>Status</InputLabel>
                        <Select
                            value={vaccineStatus}
                            onChange={(e) => setVaccineStatus(e.target.value)}
                            label="Status"
                        >
                            <MenuItem value="administered">Administered</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                            <MenuItem value="due">Due</MenuItem>
                        </Select>
                    </FormControl>
                    <CommonButton
                        variant="contained"
                        sx={buttonStyles}
                        onClick={handleAddVaccine}
                    >
                        Add Vaccine
                    </CommonButton>
                </Box>
            </Modal>

            {/* Other Action Buttons */}
            <CommonButton
                variant="outlined"
                sx={buttonStyles}
                style={{ marginTop: '20px' }}
            >
                View Reports
            </CommonButton>
        </Grid>
    );
};

export default Vaccines;