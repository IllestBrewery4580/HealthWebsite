// healthData.js

import healthDatafromAPI from '../../components/consts/healthData';

const handleDataDisplay = (state) => {
    if (!state) return "Unknown Activity State";

    switch (state) {
        case "Resting":
            return "Resting";
        case "Exercising":
            return "Exercising";
        case "Sleeping":
            return "Sleeping";
        default:
            return "Unknown Activity State";            
    }
};

const healthDataFromAPI = {
    ActivityState: "Exercising", // Resting,  Exercising, or Sleeping
    Metrics: [
        { "Name": "Blood Sugar", "Status": "Good", "Detail": null, "Value": "120 mg/dL" },
        { "Name": "Blood Pressure", "Status": "Good", "Detail": null, "Value": "135/85 mmHg" },
        { "Name": "Heart Rate", "Status": "Good", "Detail": null, "Value": "140 bpm" }
    ]
};

export default healthDataFromAPI;