import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LanIcon from '@mui/icons-material/Lan';
export const mainRoutes = [
    {
        name: 'Dashboard',
        icon: DashboardIcon,
        path: '/',
        subSlider: false,
    },
    {
        name: 'Home',
        icon: HomeIcon,
        path: '/policies/privacypolicy',
        subSlider: true,
    },
    {
        name: 'Department',
        icon: LanIcon,
        path: '/department',
        subSlider: false,
    },
]