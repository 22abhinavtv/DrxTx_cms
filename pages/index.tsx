import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const dashboardGrid = [

  {
    id: 1,
    title: "Doctor",
    color: "#7FFFD4",
  },
  {
    id: 2,
    title: "Patient",
    color: "#00FFFF",
  },
  {
    id: 3,
    title: "Nurse",
    color: "#FFEBCD",
  },
  {
    id: 4,
    title: "Pharmcist",
    color: "#98FB98",
  },
  {
    id: 5,
    title: "Laboratorist",
    color: "#7FFFD4",
  },

  {
    id: 6,
    title: "Accountant",
    color: "#00FFFF",
  },
  {
    id: 7,
    title: "Appointment",
    color: "#FFEBCD",
  },
  {
    id: 8,
    title: "Payment",
    color: "#98FB98",
  },
  {
    id: 9,
    title: "Blood bank",
    color: "#7FFFD4",
  },
  {
    id: 10,
    title: "Medicine",
    color: "#00FFFF",
  },
  {
    id: 11,
    title: "Operation Report",
    color: "#FFEBCD",
  },
  {
    id: 12,
    title: "Birth Report",
    color: "#98FB98",
  },
  {
    id: 13,
    title: "Death Report",
    color: "#00FFFF",
  },
  {
    id: 14,
    title: "Bed Allotment",
    color: "#7FFFD4",
  },
  {
    id: 15,
    title: "Notice Board",
    color: "#FFEBCD",
  },
  {
    id: 16,
    title: "Settings",
    color: "#98FB98",
  },
  {
    id: 17,
    title: "Language",
    color: "#7FFFD4",
  },
  {
    id: 18,
    title: "Back Up",
    color: "#00FFFF",
  }

]

function index() {
  return (

    <Grid justifyContent="center" >

      <Grid container item lg={12}>

        {dashboardGrid.map((data, index) =>

          <Grid key={index} item lg={2}>

            <Box sx={{
              m: 2, display: 'flex', alignItems: "center",
              justifyContent: "center",
              backgroundColor: data.color, borderRadius: "10px",
            }}>


              <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", p: 2 }}>

                <LocalHospitalIcon sx={{ fontSize: "4rem", color: "black", cursor: "pointer" }} />

                <Typography sx={{ color: "black" }}>{data.title}</Typography>

              </Box>

            </Box>

          </Grid>
        )
        }

      </Grid >

    </Grid >
  )
}

export default index