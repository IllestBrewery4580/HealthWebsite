import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import RateReviewIcon from '@mui/icons-material/RateReview';



export const mainNavbarItems = [
    {
        id: 'health',
        icon: <HealthAndSafetyIcon />,
        label: 'Health Dashboard',
        route: 'health',
        statement: 'Stay healthy by following these tips.',
        buttonLabel: 'View Health Dashboard',
    },
    {
        id: 'settings',
        icon: <SettingsIcon />,
        label: 'Settings',
        route: 'settings',
    },
    {
        id: 'userReview',
        icon: <RateReviewIcon/>,
        label: 'User Review',
        route: 'userReview',
        statement: 'Share your feedback here!',
        buttonLabel: 'Write a Review',
    },
];