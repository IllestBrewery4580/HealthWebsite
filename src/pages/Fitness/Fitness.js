import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'
import CommonButton from '../../components/Common/CommonButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import ReactApexChart from 'react-apexcharts';
import CircularProgress from '@mui/material/CircularProgress';

const chartData = {
    series: [
        {
            name: 'Steps',
            data: [5000, 6000, 7000, 8000, 10000],
        },
    ],
    options: {
        chart: {
            type: 'line',
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        },
        title: {
            text: 'Weekly Step Count',
        },
    },
};

// Workout Plans Data
const workoutPlans = [
    { title: 'Beginner Plan', description: 'A 30-minute workout for beginners focusing on bodyweight exercises.' },
    { title: 'Intermediate Plan', description: 'A 45-minute workout including strength and cardio.' },
    { title: 'Advanced Plan', description: 'A 1-hour intense workout for advanced fitness enthusiasts.' },
];

const Fitness = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [activity, setActivity] = useState('');
    const [activityList, setActivityList] = useState([]);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const progress = 50; // Static progress value for now (can be dynamic)

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const handleAddActivity = () => {
        if (activity) {
            setActivityList([...activityList, activity]);
            setActivity(''); // Clear input
        }
    };

    const handleBmiCalculation = () => {
        if (weight && height) {
            const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2); // BMI formula
            setBmi(bmiValue);
        }
    };

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
        <Grid container spacing={2} sx={{ padding: '16px' }}>
            {/* Step Chart */}
            <Grid item xs={12}>
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="line"
                    height={350}
                />
            </Grid>

            {/* Workout Timer */}
            <Grid item xs={12}>
                <Typography variant="h6">Workout Timer</Typography>
                <Typography>
                    {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
                </Typography>
                <CommonButton
                    variant="contained"
                    onClick={() => setIsRunning(!isRunning)}
                >
                    {isRunning ? 'Pause' : 'Start'}
                </CommonButton>
                <CommonButton
                    variant="outlined"
                    onClick={() => {
                        setTime(0);
                        setIsRunning(false);
                    }}
                >
                    Reset
                </CommonButton>
            </Grid>

            {/* Fitness Goal Progress */}
            <Grid item xs={12}>
                <Typography variant="h6">Fitness Goal Progress</Typography>
                <LinearProgress variant="determinate" value={progress} />
                <Typography>{progress}% Completed</Typography>
            </Grid>

            {/* Activity Logger */}
            <Grid item xs={12}>
                <TextField
                    label="Log Your Activity"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    fullWidth
                />
                <CommonButton
                    variant="contained"
                    sx={{ marginTop: '10px' }}
                    onClick={handleAddActivity}
                >
                    Add Activity
                </CommonButton>
                <ul>
                    {activityList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Grid>

            {/* Workout Plans */}
            <Grid container spacing={2}>
                {workoutPlans.map((plan, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{plan.title}</Typography>
                                <Typography variant="body2">{plan.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* BMI Calculator */}
            <Grid item xs={12} style={{ marginTop: '20px' }}>
                <Typography variant="h6">BMI Calculator</Typography>
                <TextField
                    label="Enter Weight (kg)"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Enter Height (cm)"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    fullWidth
                    style={{ marginTop: '10px' }}
                />
                <CommonButton
                    variant="contained"
                    sx={{ marginTop: '10px' }}
                    onClick={handleBmiCalculation}
                >
                    Calculate BMI
                </CommonButton>
                {bmi && (
                    <Typography variant="body1" style={{ marginTop: '10px' }}>
                        Your BMI: {bmi}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

export default Fitness;