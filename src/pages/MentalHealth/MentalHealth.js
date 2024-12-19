import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SupportIcon from '@mui/icons-material/Support';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Modal, Typography } from '@mui/material';

const MentalHealth = () => {
    const [openModal, setOpenModal] = React.useState(false);

    const buttonStyles = {
        fontSize: 20,
        fontWeight: 200,
        backgroundColor: '#1976d2',
        '&:hover': {
            backgroundColor: '#9c27b0',
        },
        '&.MuiButton-outlined': {
            color: '#d32f2f',
            borderColor: '#2e7d32',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    };

    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    return (
        <Grid container spacing={2} style={{ padding: '16px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
            {/* Header */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#1976d2' }}>Mental Health Support</h1>
                <p style={{ color: '#666' }}>Explore resources and take steps to improve your mental well-being.</p>
            </Grid>

            {/* Resource Buttons */}
            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                <Grid item xs={4}>
                    <CommonButton
                        variant="contained"
                        startIcon={<HelpOutlineIcon />}
                        sx={buttonStyles}
                        onClick={handleModalOpen}
                    >
                        Get Help
                    </CommonButton>
                </Grid>
                <Grid item xs={4}>
                    <CommonButton
                        variant="contained"
                        startIcon={<SupportIcon />}
                        sx={buttonStyles}
                    >
                        Talk to Someone
                    </CommonButton>
                </Grid>
                <Grid item xs={4}>
                    <CommonButton
                        variant="contained"
                        startIcon={<SelfImprovementIcon />}
                        sx={buttonStyles}
                    >
                        Relaxation Tips
                    </CommonButton>
                </Grid>
            </Grid>

            {/* Cards */}
            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#1976d2', color: '#ffffff' }}>
                        <CardContent>
                            <h3>Mindfulness</h3>
                            <p>Practice meditation and breathing exercises to reduce stress.</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#9c27b0', color: '#ffffff' }}>
                        <CardContent>
                            <h3>Therapy</h3>
                            <p>Connect with professional therapists for personalized support.</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#d32f2f', color: '#ffffff' }}>
                        <CardContent>
                            <h3>Journaling</h3>
                            <p>Write down your thoughts and emotions to gain clarity.</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Feedback Section */}
            <Grid item xs={12} style={{ marginTop: '32px', textAlign: 'center' }}>
                <TextField
                    label="Your Thoughts"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '16px' }}
                    placeholder="Share your thoughts here..."
                />
                <CommonButton variant="contained" sx={buttonStyles}>Submit</CommonButton>
            </Grid>

            {/* Footer */}
            <Grid item xs={12} style={{ textAlign: 'center', marginTop: '32px' }}>
                <p style={{ color: '#666' }}>
                    Remember, you're not alone. Reach out and talk to someone if you need help.
                </p>
            </Grid>

            {/* Modal for 'Get Help' button */}
            <Modal open={openModal} onClose={handleModalClose}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fff',
                    padding: '16px',
                    boxShadow: 24,
                    borderRadius: '8px',
                    width: '300px'
                }}>
                    <Typography variant="h6" gutterBottom>Get Help</Typography>
                    <Typography variant="body2">If you're in immediate danger, please call emergency services. If you need support, consider reaching out to a mental health professional or helpline.</Typography>
                    <CommonButton onClick={handleModalClose} sx={buttonStyles}>Close</CommonButton>
                </div>
            </Modal>
        </Grid>
    );
};

export default MentalHealth;