import React from "react";
import { TableContainer , Table,TableHead, TableBody, TableRow,TableCell, Paper , Button} from '@mui/material'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'

function UpdateAccount() {
  const [name ,setName] = useState('');
  const [email ,setEmail] = useState('');
  
 const [student ,setStudent] = useState([])
 useEffect (() =>{
   axios.get('http://localhost:8081/')
   .then(res =>setStudent(res.data))
   .catch(err => console.log(err));
 },[])
 
  return (
    <>
      <h1  style={{marginTop:80,marginBottom:15, alignItems:"center", textAlign:'center',color:'hsl(199, 94%, 55%)', fontWeight:700}}>Manage Account</h1>
        <TableContainer  component={Paper} sx={{mX:15,marginLeft:25,maxWidth:1200, maxHeight:500}}>
           <Table aria-label="simple table" sx={{textAlign:'center',padding:0}} stickyHeader>
              <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Depatment</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  { student.map((data) => (
                    <TableRow
                      key={data.id}
                      sx={{'&:last-child td, &:last-child th':{border:0}}}
                    >
                      <TableCell>{data.Id}</TableCell>
                      <TableCell>{data.UserName}</TableCell>
                      <TableCell>{data.FirstName}</TableCell>
                      <TableCell>{data.LastName}</TableCell>
                      <TableCell>{data.Email}</TableCell>
                      <TableCell>{data.Role}</TableCell>
                      <TableCell>{data.Department}</TableCell>
                      <TableCell align="center">
                        
                        <Link to='/Admin/UpdateAccount/updateTable'><Button variant="contained" color="info" size="small" sx={{mx:2}}>Update</Button></Link>
                        <Button variant="contained" color="error" size="small">Delete</Button>

                      </TableCell>

                    </TableRow>
                  ))

                  }
              </TableBody>
           </Table>
        </TableContainer>
    </>
  );
}

export default UpdateAccount;
