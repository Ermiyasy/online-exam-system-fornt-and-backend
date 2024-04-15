
import { Grid, TextField } from '@mui/material';
import React, { useState }   from 'react'

      

const initialFValues = {
    id :0,
    fullName : '',
    email:'',
    mobile: '',
    city : '',
    departmentId:'',
    hireDate : new Date(),
    isPermanent :false,
}

export default function AddCourceForm() {
     
           
      const [value ,setValue]  = useState(initialFValues);
      
      

    return (
        <>
        <form sx={{m:5,p:5}}>
            <Grid container>
                <Grid item xs={5}>
                    <TextField 
                        variant='outlined'
                        label="Full Name"
                        value={value.fullName}                    
                    />
                      <TextField 
                        variant='outlined'
                        label="Email"
                        value={value.email}                    
                    />
                     <TextField 
                        variant='outlined'
                        label="Cource Name"
                        value={value.email}                    
                    />
                     <TextField 
                        variant='outlined'
                        label="Cource code"
                        value={value.email}                    
                    />
                    
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
           
        </>
    )
}