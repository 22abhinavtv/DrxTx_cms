import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { subRoutes } from '../../config/Routes/subRoutes';


export const SubSidebar = () => {


    const [isActive, setIsActive] = useState([]);

    const [isExpand, setIsExpand] = useState(true)

    const router = useRouter()


    const route = useRouter();



    const Open = (index: number) => {

        let newArray: any = [...isActive]

        newArray[index] = !newArray[index];

        setIsActive(newArray)
        setIsExpand(true)
    }

    const Expand = () => {

        setIsExpand(!isExpand)
        // setIsActive(false)
    }


    return (

        <Box className={styles.subslider} sx={{
            overflow: "hidden", width: 'fit-content',
            overflowY: "scroll", height: "90vh", backgroundColor: "white", borderRight: "1px solid lightgrey"
        }}>

            <Box onClick={Expand} sx={{ cursor: "pointer", display: "flex", justifyContent: 'center', alignItems: "center", p: 2 }}>

                {isExpand ?
                    <KeyboardDoubleArrowLeftIcon sx={{ color: "green", fontSize: "2rem" }} />
                    :
                    <KeyboardDoubleArrowRightIcon sx={{ color: "green", fontSize: "2rem" }} />
                }

            </Box>

            <Divider />



            {subRoutes.map((data, index) =>

                <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", }}>

                    <Box onClick={() => Open(index)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            backgroundColor: route.asPath === "/treatment/dental" ? "white" : "white",
                            px: 1, py: 1.2,
                            m: 0.5,
                            '&:hover': {
                                backgroundColor: '#F2F3F4',
                                transition: "0.3s",
                                borderRadius: "10px"
                            },
                        }}>

                        <Box>{data.icon}</Box>

                        {isExpand &&
                            <>
                                <Typography variant='subtitle2'
                                    sx={{
                                        ml: 2,
                                        width: "150px", color: "#566573",
                                        '&:hover': {
                                            transition: "0.3s",
                                            borderRadius: "10px"
                                        },

                                    }}>{data.name}</Typography>

                                {isActive[index] == true ? <KeyboardArrowDownIcon sx={{ color: "#566573" }} /> : <KeyboardArrowRightIcon sx={{ color: "#566573" }} />}
                            </>}
                    </Box>

                    {isActive[index] == true &&

                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            px: 1,
                        }}>

                            {data.children.map((child, index) =>
                                <Box key={index} onClick={() => router.push(child.path)}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        '&:hover': {
                                            backgroundColor: '#F2F3F4',
                                            transition: "0.5s",
                                            borderRadius: "10px"
                                        },

                                    }}>
                                    <FiberManualRecordIcon sx={{ flex: 1, fontSize: route.asPath === child.path ? "0.6rem" : "0.4rem", color: route.asPath === child.path ? '#53D769' : '#566573', }} />
                                    <Typography variant='subtitle2' sx={{ flex: 7, color: "#566573", p: 1, }}>{child.name}</Typography>
                                </Box>

                            )}

                        </Box>}

                </Box>


            )}

        </Box>

    )
}
