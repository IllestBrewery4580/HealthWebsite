let healthData = {
    heartRate: 100, // bpm
    bloodPressure: { systolic: 120, diastolic: 80 },
    bodyTemperature: 98.6, // Fahrenheit
    steps: 5000,
    caloriesBurned: 300,
    sleepHours: 7,
  };
  
  let activityStatus = "active"; // Can be 'exercising', 'sleeping', or 'active'
  
  function analyzeHealth(healthData, activityStatus) {
    let status = "Healthy";
  
    // Heart rate check - change threshold based on activity status
    if (activityStatus === "exercising") {
      if (healthData.heartRate < 120 || healthData.heartRate > 160) {
        status = "Alert: Heart rate out of expected exercise range";
      }
    } else if (activityStatus === "sleeping") {
      if (healthData.heartRate < 50 || healthData.heartRate > 80) {
        status = "Alert: Heart rate abnormal for sleep";
      }
    } else {
      if (healthData.heartRate < 60 || healthData.heartRate > 100) {
        status = "Alert: Heart rate abnormal";
      }
    }
  
    // Blood pressure check (remains same regardless of activity)
    if (
      healthData.bloodPressure.systolic > 130 ||
      healthData.bloodPressure.diastolic > 90
    ) {
      status = "Alert: High blood pressure";
    }
  
    // Body temperature check (change based on sleep mode)
    if (activityStatus === "sleeping" && (healthData.bodyTemperature < 97 || healthData.bodyTemperature > 99)) {
      status = "Alert: Abnormal body temperature during sleep";
    }
  
    // Step count check (only relevant if not sleeping)
    if (activityStatus !== "sleeping" && healthData.steps < 3000) {
      status = "Alert: Low activity level";
    }
  
    // Sleep check (only relevant if sleeping)
    if (activityStatus === "sleeping" && healthData.sleepHours < 7) {
      status = "Alert: Insufficient sleep";
    }
  
    return status;
  }
  
  function displayHealthStatus() {
    let healthStatus = analyzeHealth(healthData, activityStatus);
  
    let statusMessage = document.createElement("div");
    statusMessage.classList.add("health-status");
  
    if (healthStatus === "Healthy") {
      statusMessage.style.color = "green";
      statusMessage.innerHTML = "You are healthy!";
    } else {
      statusMessage.style.color = "red";
      statusMessage.innerHTML = healthStatus;
    }
  
    document.body.appendChild(statusMessage);
  }
  
  displayHealthStatus();