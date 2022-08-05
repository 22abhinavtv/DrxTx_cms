import { Box, Button, Grid,TextField,Typography } from '@mui/material'
import React,{useState} from 'react'

function advertisement() {

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





    





    {
        addforms.map(() =>

        <>

<Box sx={{ width: "100%", m: 2 }}>

<Typography sx={{ width: "100%" }}>Title</Typography>

<TextField id="outlined-basic" variant="outlined" />

</Box>

<Box sx={{ width: "100%", m: 2 }}>

<Typography sx={{ width: "100%" }}>Sub Title</Typography>

<TextField id="outlined-basic" variant="outlined" />

</Box>


<Box sx={{ width: "100%", m: 2 }}>

<Typography sx={{ width: "100%" }}>Description</Typography>

<TextField
    id="outlined-multiline-static"
    multiline
    rows={4}
/>

</Box>

<Box sx={{ width: "100%", m: 2 }}>  

<Typography sx={{ width: "100%" }}>Data Name</Typography>

<TextField id="outlined-basic" variant="outlined" />

</Box>

<Box sx={{ width: "100%", m: 2 }}>

<Typography sx={{ width: "100%" }}>Data Description</Typography>

<TextField
    id="outlined-multiline-static"
    multiline
    rows={4}
/>

</Box>

<Box sx={{ width: "100%", m: 2 }}>  

<Typography sx={{ width: "100%" }}>Images</Typography>

<TextField type='file' id="outlined-basic" variant="outlined" />

</Box>

<Box sx={{ width: "100%", m: 2 }}>  

<Typography sx={{ width: "100%" }}>Icon</Typography>

<TextField type='file' id="outlined-basic" variant="outlined" />

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


export default advertisement
