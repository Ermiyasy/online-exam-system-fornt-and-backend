import React from "react";
import RichTextFile from "../../Ins/Text Filed/RichTextFile";
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
import CardActions from "@mui/material/CardActions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardContent from "@mui/material/CardContent";
import { useState, useRef } from "react";
import ExmaTitle from "./Title/ExmaTitle";
import "./Exam/Exam.css";
function preventDefault(event) {
  event.preventDefault();
}

function Exam() {
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
       <div> <ExmaTitle /></div>
       <h1 style={{textAlign:"center",margin:14}}> Approve Exam</h1>
      <div className="main">
        <div className="submin">
          <Paper variant="outlined" sx={{ height: 575, m: 2,p:2, width:350}}>
            <h2 style={{ margin: 20 }}>Exam Info</h2>

            <Box sx={{ height: 560, m: 1 }}>
              <form sx={{ m: 4, p: 15 }}>
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
                  label="Time Given"
                  color=""
                  sx={{ m: 1, p: 0 }}
                />
          <TextField
                  disabled
                  size="small"
                  label="Exam Type"
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
                Approve
              </Button>
            </Box>
          </Paper >
        </div>
        <div className="submax">
          <Paper variant="outlined"  sx ={{height: "100%",m:1,paddingBottom:5}}>
            <CardContent>
              <h1>Added Qusetions</h1>
            
            </CardContent>
            <Paper  elevation={5} sx={{m:2,p:1}}>
            <CardContent>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField fullWidth   disabled label="Qusetion 1" id="fullWidth" />
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth   disabled label="A" id="fullWidth" sx={{m:1}}/>
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth   disabled label="B" id="fullWidth" sx={{m:1}} />
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth   disabled label="C" id="fullWidth" sx={{m:1}}/>
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth   disabled label="D" id="fullWidth" sx={{m:1}}/>
              </Box>

            </CardContent>
            
         
            </Paper>
           
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
export default Exam;
