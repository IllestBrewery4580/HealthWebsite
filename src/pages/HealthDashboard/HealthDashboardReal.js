import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Box, Button, TextField } from '@mui/material';
import healthDatafromAPI from '../../components/consts/healthData'; // Assuming this is where healthDatafromAPI is declared
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'; // Import axios for the making API calls

// Correctly merge dynamicMetrics with fetched metrics
const mergeDynamicMetrics = (fetchedMetrics, dynamicMetrics) => {
  const updatedMetrics = [...fetchedMetrics];
  dynamicMetrics.forEach((metric) => {
    const index = updatedMetrics.findIndex((m) => m.Name === metric.Name)
    if (index > -1) {
      updatedMetrics[index] = metric;
    } else {
      updatedMetrics.push(metric);
    }
  });
  return updatedMetrics;
};

const HealthDashboard = () => {
  // Initialize initialValue before it's used
  const initialThresholds = {
    heartRate: { good: [60, 100], warning: [101, 120], critical: [120, Infinity] },
    bloodPressure: { good: [90, 120], warning: [121, 140], critical:  [141, Infinity] },
    oxygenSaturation: { good: [95, 100], warning: [91, 94], critical: [0, 90] },
    temperature: { good: [36.1, 37.2], warning: [37.3, 38.0], critical: [38.1, Infinity] },
    bloodGlucose: { good: [70, 100], warning: [101, 125], critical: [126, Infinity] }
  }; // Or whatever default value you want for thresholds

  const [healthData, setHealthData] = useState({ Metrics: [] });
  const [loading, setLoading] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("white"); // Add this line
  const [themeMode, setThemeMode] = useState("light"); // Default to light mode
  const [newMetricName, setNewMetricName] = useState("");
  const [newMetricGoodThreshold, setNewMetricGoodThreshold] = useState("");
  const [newMetricWarningThreshold, setNewMetricWarningThreshold] = useState("");
  const [dynamicMetrics, setDynamicMetrics] = useState([]);
  const [open, setOpen] = useState(false); // FOr handling the form dialog
  const [editMode, setEditMode] = useState(false); // New state for edit mode
  const [overallHealth, setOverallHealth] = useState({ status: "Good", color: "green" });
  const [thresholds, setThresholds] = useState(initialThresholds);
  const [recalculatedOverallHealth, setRecalculatedOverallHealth] = useState(null);
  const [newMetrics, setNewMetrics] = useState(null);
  const [metric, setMetric] = useState([]);
  const [metricValue, setMetricValue] = useState("");
  const [fetchedData, setFetchedData] = useState(null);
  
  const defaultThresholds = {
    heartRate: { good: [60, 100], warning: [101, 120] },
    bloodPressure: { good: [90, 120], warning: [121, 140] },
  };

  if (healthData.Metrics.some(metric => metric.Status === "Error")) {
    overallHealth.status = "Critical";
    overallHealth.color = "red";
  } else if (healthData.Metrics.some(metric => metric.Status === "Warning")) {
    overallHealth.status = "Warning";
    overallHealth.color = "orange";
  }

  const processedMetrics = healthData.Metrics
    .filter(metric => metric && metric.Value !== undefined) // Correct placement of .filter
    .map(metric => metric?.Value).filter(value => value !== undefined);

  const getAdjustedThresholds = (activityState) => {
    if (!activityState) {
      return defaultThresholds;
    }

    switch (activityState) {
      case "Resting":
        return {
          heartRate: { good: [60, 100], warning: [101, 120] },
          bloodPressure: { good: [90, 120], warning: [121, 140] }
        };
      case "Exercising":
        return {
          heartRate: { good: [100, 180], warning: [181, 200] },
          bloodPressure: { good: [110, 150], warning: [151, 170] }
        };
      case "Sleeping":
        return {
          heartRate: { good: [50, 70], warning: [71, 90] },
          bloodPressure: { good: [80, 110], warning: [111, 130] }
        };
      default:
        return defaultThresholds;
    }
  };

  const recalculateOverallHealth = (metrics) => {
    if (metrics.some(metric => metric.Status === "Error")) {
      setOverallHealth({ status: "Critical", color: "red" });
    } else if (metrics.some(metric => metric.Status === "Warning")) {
      setOverallHealth({ status: "Warning", color: "orange" });
    } else {
      setOverallHealth({ status: "Good", color: "green" });
    }
  };

  const addNewMetric = () => {
    if (!newMetricName || !newMetricGoodThreshold || !newMetricWarningThreshold || isNaN(metricValue)) {
      console.error("Invalid input values for metric.");
      return;
    }

    const goodThreshold = newMetricGoodThreshold.split("-").map(Number);
    const warningThreshold = newMetricWarningThreshold.split("-").map(Number);

    if (goodThreshold.some(isNaN) || warningThreshold.some(isNaN)) {
      console.error("Thresholds must be numbers.");
      return;
    }

    const metricValueNumber = Number(metricValue);
    let initialStatus = "Good";
    const Value = `${metricValue} units`; // Ensure this is always a valid number

    // Adjust status based on the thresholds
    if (metricValue >= warningThreshold[0] && metricValue <= warningThreshold[1]) {
      initialStatus = "Warning";
    } else if (metricValue < goodThreshold[0] || metricValue > goodThreshold[1]) {
      initialStatus = "Error";
    }

    // Create the new metric
    const newMetric = {
      Name: newMetricName,
      GoodThreshold: goodThreshold,
      WarningThreshold: warningThreshold,
      Value: `${metricValue} units`,
      Status: initialStatus
    };

    // Update the metrics by adding the new metric
    const updateMetrics = [...(healthData.Metrics || []), newMetric];
    
    // Update thresholds to include the new metric if needed
    const finalMetrics = updateMetricsWithThresholds(updateMetrics, thresholds);
  
    // Add new metric to dynamic metrics and update the overall health status
    setDynamicMetrics(prevMetrics => [...prevMetrics, newMetric]); // Ensure new metrics are retained
    setHealthData(prevData => ({ ...prevData, Metrics: finalMetrics }));

    // Recalculate overall health after adding a new metric
    recalculateOverallHealth(finalMetrics);

    // Reset input fields and close the dialog
    setNewMetricName("");
    setNewMetricGoodThreshold("");
    setNewMetricWarningThreshold("");
    setOpen(false);
  };

  const handleInputChange = (event) => {
    console.log(event); // Check if event exists
    console.log(event.target); // Ensure target exists
    console.log(event.target.value); // Ensure value exists
    if (!event || !event.target) return;
    const newValue = event.target.value;
    setMetricValue(newValue);
  };

  const deleteMetric = (metricName) => {
    const updatedMetrics = healthData.Metrics.filter((m) => m.Name !== metricName);
    const filteredDynamicMetrics = dynamicMetrics.filter((m) => m.Name !== metricName);
    setHealthData(prevData => ({ ...prevData, Metrics: updatedMetrics }));
    setDynamicMetrics(filteredDynamicMetrics);

    // Recalculate overall health after deleting a metric
    recalculateOverallHealth(updatedMetrics);
  };

  const getStatusColor = (status) => {
    if (status === "Good") return "green";
    if (status === "Warning") return "orange";
    return "red"; // Critical
  };

  const getTextColor = (statusColor) => {
    return statusColor === "red" ? "black" : "white";
  };

  const updateMetricsWithThresholds = (metrics, thresholds) => {
    if (!Array.isArray(metrics)) return metrics;

    return metrics.map((metric) => {
      if (!metric || metric.Value == null) {
        return { ...metric, Status: "Error" }; // Mark as error instead of throwing an exception
      }   

      // Check heart rate thresholds
      if (metric.Name === "Heart Rate") {
        const value = Number(metric.Value.split(" ")[0]); // Get the numerica value of heart rate
        if (value >= thresholds.heartRate.warning[0] && value <= thresholds.heartRate.warning[1]) {
          return { ...metric, Status: "Warning" };
        } else if (value < thresholds.heartRate.good[0] || value > thresholds.heartRate.good[1]) {
          return { ...metric, Status: "Error" };
        }
        return { ...metric, Status: "Good" };
      }

      // Check blood pressure thresholds
      if (metric.Name === "Blood Pressure") {
        const value = Number(metric.Value.split(" ")[0]); // Get the numeric value of blood pressure
        if (value >= thresholds.bloodPressure.warning[0] && value <= thresholds.bloodPressure.warning[1]) {
          return { ...metric, Status: "Warning" };
        } else if (value < thresholds.bloodPressure.good[0] || value > thresholds.bloodPressure.good[1]) {
          return { ...metric, Status: "Error" };
        }
        return { ...metric, Status: "Good" };
      }

      return metric; // Default return for other metrics
    }); // End of map function
  }; // End of updateMetricsWithThresholds function

  const simulateHealthChangesForAllMetrics = () => {
    if (!Array.isArray(healthData.Metrics)) return;

    // Simulate a health change (increase or decrease in value)
    const updatedMetrics = fetchedData.map (item => {
      const currentValue = parseFloat(item.Value.split(" ")[0]);
      const unit = item.Value.split(" ")[1];
      const newValue = currentValue + (Math.random() * 10 - 5);

      return {
        ...item,
        Value: `${newValue.toFixed(2)} ${unit}`, // Updated Value
      };
    });

    const thresholds = getAdjustedThresholds(healthData.ActivityState); // Get the adjusted thresholds based on activity state
    
    return metric.map((metric) => {
      // Ensure the metric is valid and not null
      if (!metric || !metric.Value) {
        console.error("Invalid metric detected:", metric); // Log invalid metric
        return null; // Handle invalid metric (could also return aa default value or skip it)
      }

      const value = parseInt(metric.Value.split(" ")[0], 10); // Extract numerical value from 'Value'
      console.log("Metric Value:", metric.Value);

      // Check heart rate thresholds
      if (metric.Name === "Heart Rate") {
        if (value >= thresholds.heartRate.warning[0] && value <= thresholds.heartRate.warning[1]) {
          return { ...metric, Status: "Warning" };
        } else if (value < thresholds.heartRate.good[0] || value > thresholds.heartRate.good[1]) {
          return { ...metric, Status: "Error"};
        }
        return { ...metric, Status: "Good" };
      }

      // Check blood pressure thresholds
      if (metric.Name === "Blood Pressure") {
        if (value >= thresholds.bloodPressure.warning[0] && value <= thresholds.bloodPressure.warning[1]) {
          return { ...metric, Status: "Warning" };
        } else if (value < thresholds.bloodPressure.good[0] || value > thresholds.bloodPressure.good[1]) {
          return { ...metric, Status: "Error" };
        }
        return { ...metric, Status: "Good" };
      }
      return metric; // Default for otehr metrics
    }).filter(metric => metric !== null); // Remove any null metrics if necessary
  };

  const API_ENDPOINT = 'https://my.api.mockaroo.com/health.json?key=8f6e1900';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get(API_ENDPOINT);
        const transformedData = response.data.map(item => ({
          Name: item.component, // Map 'component' to 'Name'
          Status: item.health, // Map 'health' to 'Status'
          Value: `${item.value} ${item.unit}`, // Adding unit for consistency
          Reason: item.reason || 'No reason specified', // Ensure 'reason' is added correctly
        }));

        setFetchedData(transformedData);
        setHealthData({ Metrics: transformedData });
      } catch (error) {
        console.error("Error fetching health data:", error);
      }  
    };      
      
    fetchData(); // Call fetchData on component mount  
  }, []); // Add dynamicMetrics as a dependency  

  useEffect(() => {
    document.body.style.backgroundColor = themeMode === "light" ? "white" : "black";
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ padding: 2, borderRadius: 2, marginBottom: 3, backgroundColor: themeMode === "light" ? "white" : "black", color: themeMode === "light" ? "black" : "white" }}>
      <Button
        variant="contained"
        onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
      >
        {themeMode === "light" ? "Night Mode" : "Light Mode"}
      </Button>  
  
      {/* "+" Button to open the form dialog */}
      <Button variant="outlined" sx={{ marginLeft: 2 }} onClick={() => setOpen(true)}>
        +
      </Button>
  
      <Button variant="contained" sx={{ marginLeft: 2 }} onClick={() => setEditMode(!editMode)}>
        {editMode ? "Done" : "Edit"}
      </Button>
  
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Metrics</DialogTitle>
        <DialogContent>
          <TextField
            label="Metric Name"
            value={newMetricName}
            onChange={(e) => setNewMetricName(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Good Threshold (e.g., 60-100)"
            value={newMetricGoodThreshold}
            onChange={(e) => setNewMetricGoodThreshold(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Warning Threshold (e.g., 101-120)"
            value={newMetricWarningThreshold}
            onChange={(e) => setNewMetricWarningThreshold(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            value={metricValue}
            onChange={handleInputChange}
          />   
          <Button onClick={addNewMetric} variant="contained" sx={{ marginTop: 2 }}>
            Enter
          </Button>  
        </DialogContent>
      </Dialog>

      <Typography variant="h4" gutterBottom style={{ color: themeMode === "light" ? "black" : "white" }}>
        Health Dashboard
      </Typography>

      {/* Overall Health Status */}
      <Box 
        sx={{ 
          backgroundColor: overallHealth.color, 
          padding: 2, 
          borderRadius: 2, 
          marginBottom: 3 
        }}
     >
      <Typography variant="h5" sx={{ color: "white" }}>
        {overallHealth.status}
      </Typography>
      <Typography variant="body1" sx={{ color: "white" }}>
        Activity: {healthData.ActivityState}
      </Typography>
    </Box>

    <Grid container spacing={2}>
    {healthData.Metrics.map((metric, index) => (
        <Grid item xs={12} md={6} lg={3} key={index}>
          <Card sx={{ backgroundColor: getStatusColor(metric.Status), color: "white" }}>
            <CardContent>
              <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {metric.Name}
                {editMode && (
                  <DeleteIcon onClick={() => deleteMetric(metric.Name, index)} style={{ cursor: 'pointer', color: 'white' }} />
                )}
              </Typography>
              <Typography variant="body1">Status: {metric.Status}</Typography>
              {metric.Detail && (
                <Typography variant="body2" mt={2}>
                  <strong>Details:</strong> {metric.Detail}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid> // This was missing
      ))}
    </Grid>
  </Box>
);
};

export default HealthDashboard;
