const defaultThresholds = {
  heartRate: { good: [60, 100], warning: [101, 120] },
  bloodPressure: { good: [90, 120], warning: [121, 140] },
};

const getAdjustedThresholds = (activityState) => {
  const thresholds = {
    Resting: {
      heartRate: { good: [60, 100], warning: [101, 120] },
      bloodPressure: { good: [90, 120], warning: [121, 140] },
    },
    Exercising: {
      heartRate: { good: [100, 180], warning: [181, 200] },
      bloodPressure: { good: [110, 150], warning: [151, 170] },
    },
    Sleeping: {
      heartRate: { good: [50, 70], warning: [71, 90] },
      bloodPressure: { good: [80, 110], warning: [111, 130] },
    },
  };

  return thresholds[activityState] || defaultThresholds;
};

export const analyzeHealth = (metrics, activityState) => {
  const thresholds = getAdjustedThresholds(activityState);

  return metrics.map((metric) => {
    const value = parseInt(metric.Value.split(" ")[0], 10);
    let status = "Good";

    if (metric.Name === "Heart Rate") {
      if (value >= thresholds.heartRate.warning[0] && value <= thresholds.heartRate.warning[1]) {
        status = "Warning";
      } else if (value < thresholds.heartRate.good[0] || value > thresholds.heartRate.good[1]) {
        status = "Error";
      }
    } else if (metric.Name === "Blood Pressure") {
      if (value >= thresholds.bloodPressure.warning[0] && value <= thresholds.bloodPressure.warning[1]) {
        status = "Warning";
      } else if (value < thresholds.bloodPressure.good[0] || value > thresholds.bloodPressure.good[1]) {
        status = "Error";
      }
    } else {
      // Handle other metrics
    }

    return { ...metric, Status: status };
  });
};  
