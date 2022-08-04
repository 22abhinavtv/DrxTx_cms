
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export const Policies = () => {

    const [addforms, setAddForms]: any = useState([{ id: 1 }]);

    console.log("addforms", addforms)


    const AddForms = () => {

        setAddForms([...addforms, { id: addforms.length + 1 }])

    }


    const DeleteForms = () => {

        setAddForms([...addforms, { id: addforms.length + 1 }])

    }

    return (

        <Grid container>

            <Box sx={{ width: "100%", m: 2 }}>

                <Box sx={{ width: "100%", m: 2 }}>

                    <Typography sx={{ width: "100%" }}>Title</Typography>

                    <TextField id="outlined-basic" variant="outlined" />

                </Box>


                <Box sx={{ m: 2 }}>

                    <Typography>Content</Typography>

                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                    />

                </Box>



                {
                    addforms.map(() =>

                    <>

                        <Box sx={{ m: 2 }}>

                            <Typography>SubTitle</Typography>

                            <TextField id="outlined-basic" variant="outlined" />

                        </Box>

                        < Box sx={{ m: 2 }}>

                            <Typography>Sub Content</Typography>

                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                            />

                        </Box>

                    </>

                )}


                <Box sx={{ m: 2 }}>

                    <Button variant="contained" onClick={AddForms} sx={{ mr: 2 }}> Add</Button >

                    <Button variant="contained" onClick={DeleteForms} color="error">Delete</Button>

                </Box>


            </Box>


        </Grid >
    )
}

