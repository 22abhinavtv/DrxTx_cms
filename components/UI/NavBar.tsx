import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { Badge, Box, IconButton, TextField, Typography } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Image from "next/image"
import { ToggleMui } from '../ToggleMui/ToggleMui';


export const NavBar = () => {
    return (


        <Box sx={{
            display: "flex",
            justifyContent: "space-between", alignItems: "center",
            backgroundColor: "white"
        }}>

            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", ml: 1 }}>

                <Image src="/assets/logo/logo.png" width="120px" height="40px" />

                <Typography variant="h5" fontWeight="bold" sx={{ color: "green", p: 2 }}>Content Mangement System</Typography>

            </Box>

            <Box>

                <TextField id="outlined-basic" label="Search" variant="outlined" />

            </Box>

            <ToggleMui label={undefined} />


            <Box sx={{ display: "flex" }}>

                <IconButton>

                    <Badge badgeContent={1} color="primary">
                        <QuestionAnswerIcon sx={{ color: "gray" }} />
                    </Badge>

                </IconButton>


                <IconButton>

                    <Badge badgeContent={99} color="primary">
                        <EmailIcon sx={{ color: "gray" }} />
                    </Badge>

                </IconButton>


                <IconButton>

                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon sx={{ color: "gray" }} />
                    </Badge>

                </IconButton>


                <Box sx={{ display: "flex", alignItems: "center", ml: 2, cursor: "pointer" }}>

                    {/* <Image src="/assets/profile/avatar.png" width="40px" height="40px" style={{ borderRadius: "100%", margin: "10px" }} />

                    <Typography sx={{ ml: 1, mr: 2 }}>Barjiz</Typography>

                    <KeyboardArrowDownIcon sx={{ mr: 1 }} /> */}

                </Box>



            </Box>



        </Box >
    )
}
