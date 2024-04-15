import React from "react";
import "./ManageExam.css";
import RichTextFile from "./Text Filed/RichTextFile";
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

const bull = (
  <Box
    component="span"
    sx={{ display: "flex", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function MangeExam() {
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
      <h1 style={{textAlign:"center",margin:14}}> ManageExam</h1>
      <div className="main">
        <div className="submin">
          <Paper variant="outlined" sx={{ height: 575, m: 2,p:2, width:350}}>
            <h2 style={{ margin: 20 }}>Exam Info</h2>

            <Box sx={{ height: 560, m: 1 }}>
              <form sx={{ m: 4, p: 15 }}>
                <TextField
                  size="small"
                  label="Course Code"
                  color=""
                  focused
                  sx={{ m: 1, p: 0 }}
                />
                <TextField
                  size="small"
                  label="Course Name  "
                  color=""
                  focused
                  sx={{ m: 1, p: 0 }}
                />
               <StudentSelect/>
                <FormControl focused sx={{ m: 2, minWidth: 210 }} size="small">
                  <InputLabel id="demo-select-small-label">Time</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={""}
                    label="Time"
                    color=""
                  >
                    <MenuItem value="">
                      <em>Time</em>
                    </MenuItem>
                    <MenuItem value={10}>1:30</MenuItem>
                    <MenuItem value={20}>2:30</MenuItem>
                    <MenuItem value={30}>3:30</MenuItem>
                  </Select>
                </FormControl>
                <FormControl focused sx={{ m: 2, minWidth: 210 }} size="small">
                  <InputLabel id="demo-select-small-label">
                    Exam Type
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={""}
                    label="Exam Type"
                    color=""
                  >
                    <MenuItem value="">
                      <em>Time</em>
                    </MenuItem>
                    <MenuItem value={10}>Mid Exam</MenuItem>
                    <MenuItem value={20}>Final Exam</MenuItem>
                    <MenuItem value={30}>Model Exam</MenuItem>
                  </Select>
                </FormControl>
                <FormControl focused sx={{ m: 2, minWidth: 210 }} size="small">
                  <TextareaAutosize
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
                variant="contained"
                sx={{ alignItems: "end", marginLeft: 15, marginTop: 5 }}
              >
                Update
              </Button>
            </Box>
          </Paper >
        </div>
        <div className="submax">
          <Paper variant="outlined"  sx ={{height: "100%",m:1,paddingBottom:5}}>
            <CardContent>
              <h1>Added Qusetions</h1>
              <CardActions>
                <Button
                  size="mid"
                  variant="contained"
                  color="success"
                  sx={{ alignItems: "end", m: 1 }}
                  onClick={handleClickOpen}
                >
                  Add Exam
                </Button>
              </CardActions>
            </CardContent>
            <Paper  elevation={4} sx={{m:2,p:1}}>
            <CardContent>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField fullWidth label="Qusetion 1" id="fullWidth" />
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth label="A" id="fullWidth" sx={{m:1}}/>
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth label="B" id="fullWidth" sx={{m:1}} />
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth label="C" id="fullWidth" sx={{m:1}}/>
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth label="D" id="fullWidth" sx={{m:1}}/>
              </Box>

            </CardContent>
            
            <Button
                variant="contained"
                sx={{ alignItems: "end", m:2 }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ alignItems: "end", m:2 }}
              >
                Delete
              </Button>
            </Paper>
            <Paper  elevation={4} sx={{m:2,p:1}}>
            <CardContent>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField fullWidth label="Qusetion 2" id="fullWidth" />
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth label="A" id="fullWidth" sx={{m:1}}/>
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth label="B" id="fullWidth" sx={{m:1}} />
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth label="C" id="fullWidth" sx={{m:1}}/>
              </Box>
              <Box
                sx={{
                  width: 800,
                  maxWidth: "100%",
                }}
              >
                <TextField size="small" fullWidth label="D" id="fullWidth" sx={{m:1}}/>
              </Box>

            </CardContent>
            
            <Button
                variant="contained"
                sx={{ alignItems: "end", m:2 }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ alignItems: "end", m:2 }}
              >
                Delete
              </Button>
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
          <DialogTitle>Add Exam</DialogTitle>
          <DialogContent sx={{ m: 1, p: 2 }}>
            <Box>
              <form>
                <RichTextFile />
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
              ADD
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
export default MangeExam;


function StudentSelect() {
    return (
      <div>
        <FormControl focused sx={{ m:1,p:0, minWidth: 202 }}>
          <InputLabel htmlFor="grouped-select">Student Type</InputLabel>
          <Select  size="small" defaultValue="" id="grouped-select" label="Student Type">
            <MenuItem value="">
              <em>Student Type</em>
            </MenuItem>
            <ListSubheader>Regular</ListSubheader>
            <MenuItem value={1}>First Year</MenuItem>
            <MenuItem value={2}>Seconde Year</MenuItem>
            <MenuItem value={2}>Third Year</MenuItem>
            <MenuItem value={2}>Fouth Year</MenuItem>
            <MenuItem value={2}>Fivth Year</MenuItem>
            <ListSubheader>Week End</ListSubheader>
            <MenuItem value={1}>First Year</MenuItem>
            <MenuItem value={2}>Seconde Year</MenuItem>
            <MenuItem value={2}>Third Year</MenuItem>
            <MenuItem value={2}>Fouth Year</MenuItem>
            <MenuItem value={2}>Fivth Year</MenuItem>
            <ListSubheader>Nigth</ListSubheader>
            <MenuItem value={1}>First Year</MenuItem>
            <MenuItem value={2}>Seconde Year</MenuItem>
            <MenuItem value={2}>Third Year</MenuItem>
            <MenuItem value={2}>Fouth Year</MenuItem>
            <MenuItem value={2}>Fivth Year</MenuItem>
            <ListSubheader>Bega</ListSubheader>
            <MenuItem value={1}>First Year</MenuItem>
            <MenuItem value={2}>Seconde Year</MenuItem>
            <MenuItem value={2}>Third Year</MenuItem>
            <MenuItem value={2}>Fouth Year</MenuItem>
            <MenuItem value={2}>Fivth Year</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
  