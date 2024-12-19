import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import BedIcon from '@mui/icons-material/Bed';
import DiningIcon from '@mui/icons-material/Dining';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import MoodIcon from '@mui/icons-material/Mood';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import SettingsIcon from '@mui/icons-material/Settings';



export const mainNavbarItems = [
    {
        id: 'Search',
        icon: < SearchIcon />,
        label: 'Search',
        route: 'search',
        statement: 'This is the Search Bar',
        buttonLabel: 'What do you want to Search?',
    },
    {    
        id: 'Pulse',
        icon: < FavoriteBorderIcon />,
        label: 'Pulse',
        route: 'pulse',
        statement: 'This is your pulse information.',
        buttonLabel: 'Check Pulse',
    },
    {
        id: 'health',
        icon: <HealthAndSafetyIcon />,
        label: 'Health',
        route: 'health',
        statement: 'Stay healthy by following these tips.',
        buttonLabel: 'View Health Tips',
    },
    {
        id: 'thermo',
        icon: <DeviceThermostatIcon />,
        label: 'Thermostat',
        route: 'thermo',
        statement: 'What is your body temp?',
        buttonLabel: 'What does it mean?',
    },
    {
        id: 'fitness',
        icon: <FitnessCenterIcon />,
        label: 'Fitness',
        route: 'fitness',
    },
    {
        id: 'weight',
        icon: <MonitorWeightIcon />,
        label: 'Weight',
        route: 'weight',
    },
    {
        id: 'sleep',
        icon: <BedIcon />,
        label: 'Sleep',
        route: 'sleep',
    },
    {
        id: 'nutrition',
        icon: <DiningIcon />,
        label: 'Nutrition',
        route: 'nutrition',
    },
    {
        id: 'hydration',
        icon: <WaterDropIcon />,
        label: 'Hydration',
        route: 'hydration',
    },
    {
        id: 'mood',
        icon: <MoodIcon />,
        label: 'Mental Health',
        route: 'mood',
    },
    {
        id: 'Medical Information',
        icon: <MedicalInformationIcon />,
        label: 'Medical Information',
        route: 'Medical Information',
    },
    {
        id: 'Cholesterol',
        icon: <BubbleChartIcon />,
        label: 'Cholesterol',
        route: 'Cholesterol',
    },
    {
        id: 'Covid',
        icon: <CoronavirusIcon />,
        label: 'Covid Info',
        route: 'Coronavirus',
    },
    {
        id: 'Vaccines',
        icon: < VaccinesIcon />,
        label: 'Vaccine Information',
        route: 'vaccines',
    },
    {
        id: 'settings',
        icon: <SettingsIcon />,
        label: 'Settings',
        route: 'settings',
    },
];