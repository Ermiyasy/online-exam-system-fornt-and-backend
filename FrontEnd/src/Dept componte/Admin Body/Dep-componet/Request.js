import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

import { TextareaAutosize } from "@mui/base";
import CardActions from "@mui/material/CardActions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardContent from "@mui/material/CardContent";
import { useState, useRef } from "react";
import "./Accept.css";
function Request() {
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
      <div className="Request">
        <h1>The Request Form will be here!</h1>
        <Paper variant="outlined" sx={{ height: 550, m: 4,mx:"25%",p:"1%", width:350}}>
       

            <Box sx={{ height: 560, m: 1 }}>
              <form sx={{ m: 4, p: 15 }}>
              <TextField
                  size="small"
                  label="Department Name"
                  color=""
                  focused
                  sx={{ m: 1, p: 0 }}
                />
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
              
                <FormControl focused sx={{ m: 1, minWidth: 210 }} size="small">
                  <InputLabel id="demo-select-small-label">
                   To Departement
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={""}
                    label="To Departement "
                    color=""
                  >
                    <MenuItem value="">
                      <em>Departement</em>
                    </MenuItem>
                    <MenuItem value={10}>Computer Sceince</MenuItem>
                    <MenuItem value={20}>ECE</MenuItem>
                    <MenuItem value={30}>Accounting</MenuItem>
                  </Select>
                </FormControl>
                <FormControl focused sx={{ m: 1, minWidth: 210 }} size="small">
                  <TextareaAutosize
                    focused
                    variant="standard"
                    aria-label="minimum height"
                    color=""
                    minRows={3}
                    placeholder="Discriptiuon"
                  />
                </FormControl>
              </form>

              <Button
                variant="contained"
                sx={{ alignItems: "end", marginLeft: 15, marginTop: 2 }}
              >
                Send
              </Button>
            </Box>
          </Paper >
        </div>
       
    </>
  );
}
export default Request;


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
