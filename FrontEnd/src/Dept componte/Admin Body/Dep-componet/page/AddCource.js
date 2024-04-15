import React from "react";
import "./AddCource.css";
import { Grid, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Link,
  Button,
} from "@mui/material";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

function AddCourceForm() {
  const [value, setValue] = useState(initialFValues);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form sx={{ mX: 4, p: 2 }}>
        <h2 style={{margin:5}}>Add Cource</h2>
        <TextField label="Course Code" color="" focused size="small" />
        <TextField label="Course Name  " color="" focused size="small"/>
        <StudentSelect />
        <TextField label="Instactor" color="" focused size="small"/>

        <Link to="/Admin/UpdateAccount/updateTable">
          <Button variant="contained" color="info" size="small" sx={{ mx: 5 }}>
            add
          </Button>
        </Link>
        <Button variant="contained" color="error" size="small">
          Reset
        </Button>
      </form>
    </Box>
  );
}

function AddCourceTable() {
  const [open, setOpen] = React.useState(false);
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
  const [value, setValue] = useState(initialFValues);

  return (
    <>
      <form sx={{ mX: 0, mY: -2, p: 0 }}>
        <h1>Courses </h1>
        <br />

        <TableContainer className="tableContainer" component={Paper}>
          <Table
            aria-label="simple table"
            sx={{ textAlign: "center", padding: 0 }}
            stickyHeader
          >
            <TableHead sx={{ maxWidth: 450 }}>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Cource Name</TableCell>
                <TableCell>Cource Code</TableCell>
                <TableCell>Student Type</TableCell>
                <TableCell>Ins</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ maxWidth: 450 }}>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell align="center">
                  <Link to="/Admin/UpdateAccount/updateTable">
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      sx={{ mx: 2, my: 1 }}
                      onClick={handleClickOpen}
                    >
                      Update
                    </Button>
                  </Link>
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>2</TableCell>
                <TableCell>2</TableCell>
                <TableCell>2</TableCell>
                <TableCell>2</TableCell>
                <TableCell>2</TableCell>
                <TableCell align="center">
                  <Link to="/Admin/UpdateAccount/updateTable">
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      sx={{ mx: 2 }}
                      onClick={handleClickOpen}
                    >
                      Update
                    </Button>
                  </Link>
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
      <div>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}sx={{width:500, height:700, p:2,marginLeft:55,marginTop:3}}>
          <DialogTitle>Update Cource</DialogTitle>
          <DialogContent sx={{p:2,m:5}}>
            <Box >
              <form sx={{ m: 5, p: 15 }}>
                <TextField label="Course Code" color="" focused sx={{ m: 1, p: 1 }} />
                <TextField label="Course Name  " color="" focused sx={{ m: 1, p: 1 }} />
                <StudentSelect/>
                <TextField label="Instactor" color="" focused sx={{ m: 1, p: 1 }} />

              </form>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default function AddCource() {
  return (
    <>
      <div className="Main">
        <div className="AddCource">
          <Paper sx={{ m: 1, p: 10 }}>
          <AddCourceForm />
          </Paper>
        </div>
        <div className="ViewCource">
          <Paper sx={{ m: 1, p: 5 }}>
            <AddCourceTable />
          </Paper>
        </div>
      </div>
    </>
  );
}


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

