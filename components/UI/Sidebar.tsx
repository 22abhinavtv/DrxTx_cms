import { Box, } from '@mui/material'
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import { UrlObject } from 'url';
import { mainRoutes } from '../../config/Routes/mainRoutes';
import SettingsIcon from '@mui/icons-material/Settings';

export const Sidebar = (props: { setSubslider: any; }) => {

    const { setSubslider } = props

    const route = useRouter();


    return (

        <Box sx={{
            backgroundColor: "#F2F3F4",
            display: "flex",
            height: "100vh",
            flexDirection: "column", justifyContent: "space-between", alignItems: "center",
            borderRight: "1px solid lightgrey", p: 1
        }}>

            <Image onClick={() => { setSubslider(false), route.push('/profile') }} src="/assets/profile/avatar.png" width="40px" height="40px"
                style={{ borderRadius: "100%", margin: "10px", cursor: "pointer" }} />


            <Box>

                {mainRoutes.map((data, index) =>

                    <Box key={index} sx={{
                        display: "flex",
                        flexDirection: "row", justifyContent: "center", alignItems: "center",
                        p: 1.5, cursor: "pointer", color: "gray", transition: '0.5s',
                        mb: 1,
                        // boxShadow: route.asPath === data.path && "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        backgroundColor: route.asPath === data.path ? '#53D769' : '#F2F3F4', borderRadius: "10px"

                    }}
                        onClick={() => {
                            setSubslider(data.subSlider)
                            route.push(data.path)

                        }}>

                        <data.icon sx={{
                            color: route.asPath === data.path ? 'white' : 'gray',
                            '&:hover': { color: route.asPath === data.path ? 'white' : '#53D769' }
                        }} />

                    </Box>

                )}
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "row", justifyContent: "center", alignItems: "center",
                p: 1.5, cursor: "pointer", color: "white", transition: '0.5s', '&:hover': {
                    borderRadius: "10px",
                },
                mb: 1,
                // boxShadow: route.asPath === '/settings' && "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                backgroundColor: route.asPath === '/settings' ? 'black' : '#F2F3F4', borderRadius: "10px"

            }}
                onClick={() => { setSubslider(false), route.push('/settings') }}>
                <SettingsIcon sx={{
                    color: route.asPath === "/settings" ? '#53D769' : 'gray',
                    '&:hover': { color: route.asPath === "/settings" ? '#53D769' : '#53D769' }
                }} />


            </Box>

        </Box >
    )
}
