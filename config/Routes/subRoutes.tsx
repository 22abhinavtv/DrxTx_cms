import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


export const subRoutes = [

    {
        name: 'Advertisement',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Advertisement',
                path: '/advertisement/advertisement'
            },
        ]
    },

    {
        name: 'Policies',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Privacy Policy',
                path: '/policies/privacypolicy'
            },
            {
                name: 'Terms & Conditions',
                path: '/policies/termsandcondition'
            },
            {
                name: 'Editorial Policy',
                path: '/policies/editorialpolicy'
            },
            {
                name: 'Return Policy',
                path: '/policies/returnpolicy'
            },
            {
                name: 'Customer Policy',
                path: '/policies/customerpolicy'
            },
            {
                name: 'IP Policy',
                path: '/policies/ippolicy'
            },
        ]
    },
    {
        name: 'Corporate Wellness',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Section 1',
                path: '/corporatewellness/corporatewellness'
            }
        ]
    },

    {
        name: 'Nurse',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Nurse Manager',
                path: '/appointments/create'
            },
            {
                name: 'Nurse Superintendent',
                path: '/appointments/list'
            },
            {
                name: 'Medications',
                path: '/appointments/list'
            },
            {
                name: 'Admission',
                path: '/appointments/list'
            },
            {
                name: 'Room Management',
                path: '/appointments/list'
            },
        ]
    },

    {
        name: 'Treatment',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Dental',
                path: '/treatment/dental'
            },
            {
                name: 'Eyecare',
                path: '/treatment/eyecare'
            },
            {
                name: 'Emergency',
                path: '/treatment/emergency'
            },
            {
                name: 'obg/gyno',
                path: '/treatment/obj'
            },
            {
                name: 'Pediatric',
                path: '/treatment/pediatric'
            },
        ]
    },

    {
        name: 'Image Processor',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Create Image Request',
                path: '/appointments/create'
            },
            {
                name: 'Image Testing Request',
                path: '/appointments/list'
            },
            {
                name: 'Image Test Result',
                path: '/appointments/list'
            },
        ]
    },


    {
        name: 'Lab Request',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Lab Test Request',
                path: '/appointments/create'
            },
            {
                name: 'Lab Test Report',
                path: '/appointments/list'
            },
            {
                name: 'Completed',
                path: '/appointments/list'
            },
        ]
    },

    {
        name: 'Medications',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Requests',
                path: '/appointments/create'
            },
            {
                name: 'Completed',
                path: '/appointments/list'
            },
            {
                name: 'New Request',
                path: '/appointments/list'
            },
            {
                name: 'Dispense',
                path: '/appointments/list'
            },
            {
                name: 'Return Medication',
                path: '/appointments/create'
            },
        ]
    },

    {
        name: 'Inventory',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Request',
                path: '/appointments/create'
            },
            {
                name: 'Items',
                path: '/appointments/list'
            },
            {
                name: 'Inventory Received',
                path: '/appointments/list'
            },
            {
                name: 'Reports',
                path: '/appointments/list'
            },
        ]
    },

    {
        name: 'Referrals',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'View Referrals',
                path: '/appointments/create'
            },
            {
                name: 'New Referral',
                path: '/appointments/create'
            },
            {
                name: 'Reference Letter Format',
                path: '/appointments/create'
            },
            {
                name: 'Reference Received',
                path: '/appointments/list'
            },
            {
                name: 'Reference Send',
                path: '/appointments/list'
            },
        ]
    },

    {
        name: 'Patient Relations Managment (PRM)',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Recommendations',
                path: '/appointments/create'
            },
            {
                name: 'Birthday Alerts',
                path: '/appointments/list'
            },
            {
                name: 'Promotions',
                path: '/appointments/list'
            },
        ]
    },

    {
        name: 'Billing',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Invoices',
                path: '/appointments/create'
            },
            {
                name: 'New Invoice',
                path: '/appointments/list'
            },
            {
                name: 'Prices',
                path: '/appointments/list'
            },
            {
                name: 'Price Profiles',
                path: '/appointments/list'
            },
            {
                name: 'Cashier',
                path: '/appointments/list'
            }
        ]
    },

    {
        name: 'Incidents',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Current Incidents',
                path: '/appointments/create'
            },
            {
                name: 'New Incident',
                path: '/appointments/list'
            },
            {
                name: 'History',
                path: '/appointments/list'
            },
            {
                name: 'Reports',
                path: '/appointments/list'
            }
        ]
    },

    {
        name: 'Configuration',
        icon: <AccountBalanceIcon sx={{ fontSize: "1.3rem", color: "#566573" }} />,
        children: [
            {
                name: 'Settings',
                path: '/appointments/create'
            }
        ]
    },

]