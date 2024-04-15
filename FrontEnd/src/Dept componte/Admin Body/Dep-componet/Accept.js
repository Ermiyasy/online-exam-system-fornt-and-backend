import React from "react";
 
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize } from "@mui/base";
import {

  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Link,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardContent from "@mui/material/CardContent";
import { useState, useRef } from "react";
import ExmaTitle from "../Title/ExmaTitle";
import "../Exam/Exam.css";
function preventDefault(event) {
  event.preventDefault();
}

function Accept() {
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  const handleCloseUpdate = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenUpdate(false);
    }
  };
  const editor = useRef(null);
  const [ageM, setAgeM] = React.useState("");
  return (
    <>
      
       <h1 style={{textAlign:"center",margin:5}}> Approve Request</h1>
      <div className="main">
        <div className="submin">
          <Paper variant="outlined" sx={{ height: 575, m: 2,p:2, width:350}}>
            <h2 style={{ margin: 20 }}>Request Info</h2>

            <Box sx={{ height: 560, m: 1 }}>
              <form sx={{ m: 4, p: 15 }}>
              <TextField
                  disabled
                  size="small"
                  label="Departement"
                  color=""
                  sx={{ m: 1, p: 0 }}
                />
                <TextField
                  disabled
                  size="small"
                  label="Course Code"
                  color=""
                  focused
                  sx={{ m: 1, p: 0 }}
                />
                <TextField
                  disabled
                  size="small"
                  label="Course Name  "
                  color=""
                  focused
                  sx={{ m: 1, p: 0 }}
                />
                <TextField
                  disabled
                  size="small"
                  label="Selected Student"
                  color=""
                  sx={{ m: 1, p: 0 }}
                />
               
          <TextField
                  disabled
                  size="small"
                  label=""
                  color=""
                  sx={{ m: 1, p: 0 }}
                />
          
                  
                <FormControl focused sx={{ m: 2, minWidth: 210 }} size="small">
                  <TextareaAutosize
                    disabled
                    focused
                    variant="standard"
                    aria-label="minimum height"
                    color=""
                    minRows={2}
                    placeholder="Discriptiuon"
                  />
                </FormControl>
              </form>
           
                <Button
                  size="mid"
                  variant="contained"
                  color="error"
                  sx={{ m:2 }}
                  onClick={handleClickOpen}
                >
                  Decline
                </Button>
           

              <Button
                variant="contained"
                sx={{m:2 }}
                color="success"
              >
                Accept
              </Button>
            </Box>
          </Paper >
        </div>
        <div className="submax">
          <h2> Request List</h2>
          <Paper variant="outlined"  sx ={{height: "100%",m:1,paddingBottom:5}}>
          <TableContainer
                component={Paper}
                sx={{ mX: 0, margin: 1, maxWidth: "100%", maxHeight: 300 }}
              >
                <Table
                  aria-label="simple table"
                  sx={{ textAlign: "center", padding: 0 }}
                  stickyHeader
                >
                  <TableHead sx={{ maxWidth: "100%" }}>
                    <TableRow>
                    <TableCell>Departement</TableCell>
                      <TableCell>Cource Title</TableCell>
                      <TableCell>Cource Code</TableCell>
                      <TableCell>Student Type </TableCell>
                      <TableCell>Exam Type </TableCell>  
                      <TableCell>Description</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ maxWidth: "100%" }}>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>Accounting</TableCell>
                      <TableCell>C ++</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Regular</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Description</TableCell>

                      <TableCell align="center">
                        <Link to="/Admin/UpdateAccount/updateTable">
                          <Button
                            variant="contained"
                            color="info"
                            size="small"
                            sx={{ mx: 1, my: 2 }}
                            onClick={handleCloseUpdate}
                          >
                            View
                          </Button>
                        </Link>
                   
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>2</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Description</TableCell>

                      <TableCell align="center">
                        <Link to="/Admin/UpdateAccount/updateTable">
                          <Button
                            variant="contained"
                            color="info"
                            size="small"
                            sx={{ mx: 1, my: 2 }}
                            onClick={handleCloseUpdate}
                          >
                            View
                          </Button>
                        </Link>
                   
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
           
          </Paper>
        </div>
        
      </div>

      <div>
        <Dialog
          sx={{ maxWidth: 1000, m: 10 }}
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
          className="Dialog"
        >
          <DialogTitle> Exam</DialogTitle>
          <DialogContent sx={{ m: 1, p: 2 }}>
            <Box>
              <form>
                
              </form>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={handleClose}
            >
              Send
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
 
 

}
export default Accept;
