import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import ReactApexChart from 'react-apexcharts';

const Cholesterol = () => {
    const TestChart = () => {
        const options = {
            chart: { id: 'basic-bar' },
            xaxis: { categories: [1991, 1992, 1993, 1994] }
        };
        const series = [{ name: 'series-1', data: [30, 40, 35,, 50] }];

        return <ReactApexChart options={options} series={series} type="bar" height={350} />;
    }
    const chartOptions = {
        series: [{
            name: 'Cholesterol Levels',
            data: [190, 220, 210, 180, 200]
        }],
        options: {
            chart: {
                type: 'line',
                height: 350
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                title: {
                    text: 'Months'
                }
            },
            yaxis: {
                title: {
                    text: 'Cholesterol (mp/dL)'
                }
            }
        }
    };

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
    return (
        <Grid item xs = {8} styles={{backgroundColor: '#1976d2', padding: '16px'}}>
            This is the Health Page.
            <CommonButton
                variant="contained"
                sx={buttonStyles}
            >
                Text
            </CommonButton>
            <CommonButton  
                variant="outlined" 
                sx={buttonStyles}
            >
                Add user
            </CommonButton>
        </Grid>
    );    
};

export default Cholesterol;