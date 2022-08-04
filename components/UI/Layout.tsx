import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import { SubSidebar } from './SubSidebar'
import { useRouter } from 'next/router'
import { Box, Divider } from '@mui/material'


export const Layout = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {


    const [value, setValue] = React.useState(0);

    const [subslider, setSubslider] = useState(false)

    const route = useRouter();

    useEffect(() => {

        if (route.asPath === "/treatment/dental") {

            setSubslider(true)

        }


    }, [])


    return (

        <Box sx={{ width: "100%", display: "flex" }}>

            <Box sx={{ width: "fit-content" }}>
                <Sidebar setSubslider={setSubslider}  />
            </Box>


            <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>

                <Box>

                    <NavBar />

                    <Divider />

                </Box>

                <Box sx={{ display: "flex" }} >

                    <Box>

                        {subslider && <SubSidebar />}

                    </Box>

                    <Box sx={{ width: "100%" }}>

                        {props.children}

                    </Box>

                </Box>


            </Box >

        </Box >
    )
}
