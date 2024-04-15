import React from "react";
import "./parpereExam.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import "../Ins/Text Filed/RichTextFile.css";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Link,
} from "@mui/material";
import QuestionTitle from "./QuestionTitle/QuestionTitle";

import { TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize } from "@mui/base";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const bull = (
  <Box
    component="span"
    sx={{ display: "flex", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function PerpareExam() {
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenUPdate = () => {
    setOpenUpdate(true);
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

  const handleChangeM = (event) => {
    setAge(event.target.value);
  };
  const [content, setContent] = useState("");
  return (
    <>
      <div>
        <QuestionTitle />
      </div>

      <div>
        <div>
          <Card sx={{ minWidth: 255, m: 1, pY: 6 }}>
            <CardContent>
              <CardActions>
                <Button
                  size="mid"
                  variant="contained"
                  color="success"
                  sx={{ alignItems: "flex-end", m: 1 }}
                  onClick={handleClickOpen}
                >
                  Add Exam
                </Button>
              </CardActions>
              <TableContainer
                component={Paper}
                sx={{ mX: 0, marginLeft: 1, maxWidth: "100%", maxHeight: 300 }}
              >
                <Table
                  aria-label="simple table"
                  sx={{ textAlign: "center", padding: 0 }}
                  stickyHeader
                >
                  <TableHead sx={{ maxWidth: "100%" }}>
                    <TableRow>
                      <TableCell>Cource Title</TableCell>
                      <TableCell>Cource Code</TableCell>
                      <TableCell>Student Type </TableCell>
                      <TableCell>Exam Type </TableCell>
                      <TableCell>Time Limit </TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ maxWidth: "100%" }}>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>1</TableCell>
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
                            sx={{ mx: 2, my: 1 }}
                            onClick={handleClickOpenUPdate}
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
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Description</TableCell>

                      <TableCell align="center">
                        <Link to="/Dep/AddExam//updateTable">
                          <Button
                            variant="contained"
                            color="info"
                            size="small"
                            sx={{ mx: 2 }}
                            onClick={handleClickOpenUPdate}
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
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <Dialog
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
          className="Dialog"
        >
          <DialogTitle>Add Exam</DialogTitle>
          <DialogContent sx={{ p: 1, m: 5 }}>
            <Box>
              <form sx={{ m: 5, p: 15 }}>
                <TextField
                  label="Course Code"
                  color=""
                  focused
                  sx={{ m: 1, p: 0 }}
                />
                <TextField
                  label="Course Name  "
                  color=""
                  focused
                  sx={{ m: 1, p: 0 }}
                />
                <FormControl focused sx={{ m: 1, minWidth: 210 }} size="small">
                  <InputLabel
                    htmlFor="grouped-select"
                    id="demo-select-small-label"
                  >
                    Exam Type
                  </InputLabel>
                  <Select
                    id="grouped-select"
                    labelId="demo-select-small-label"
                    label="Exam Type"
                    color=""
                  >
                    <MenuItem value="">
                      <em>Exam Type</em>
                    </MenuItem>
                    <MenuItem value={10}>Mid Exam</MenuItem>
                    <MenuItem value={20}>Final Exam</MenuItem>
                    <MenuItem value={30}>Model Exam</MenuItem>
                  </Select>
                </FormControl>
                <StudentSelect />

                <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                  <InputLabel
                    htmlFor="grouped-select"
                    id="demo-select-small-label"
                  >
                    Time
                  </InputLabel>
                  <Select
                    id="grouped-select"
                    labelId="demo-select-small-label"
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
                <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                  <TextareaAutosize
                    variant="standard"
                    aria-label="minimum height"
                    color=""
                    minRows={2}
                    placeholder="Discriptiuon"
                  />
                </FormControl>
              </form>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          disableEscapeKeyDown
          open={openUpdate}
          onClose={handleCloseUpdate}
          className="Dialog"
        >
          <DialogTitle>Update Exam</DialogTitle>
          <DialogContent sx={{ p: 1, m: 5 }}>
            <Box>
              <form sx={{ m: 5, p: 15 }}>
                <TextField
                  label="Course Code"
                  color=""
                  focused
                  sx={{ m: 1, p: 0 }}
                />
                <TextField
                  label="Course Name  "
                  color=""
                  focused
                  sx={{ m: 1, p: 0 }}
                />
                <FormControl focused sx={{ m: 1, minWidth: 210 }} size="small">
                  <InputLabel
                    htmlFor="grouped-select"
                    id="demo-select-small-label"
                  >
                    Exam Type
                  </InputLabel>
                  <Select
                    id="grouped-select"
                    labelId="demo-select-small-label"
                    label="Exam Type"
                    color=""
                  >
                    <MenuItem value="">
                      <em>Exam Type</em>
                    </MenuItem>
                    <MenuItem value={10}>Mid Exam</MenuItem>
                    <MenuItem value={20}>Final Exam</MenuItem>
                    <MenuItem value={30}>Model Exam</MenuItem>
                  </Select>
                </FormControl>

                <StudentSelect />

                <FormControl focused sx={{ m: 1, minWidth: 210 }} size="small">
                  <InputLabel
                    htmlFor="grouped-select"
                    id="demo-select-small-label"
                  >
                    Time
                  </InputLabel>
                  <Select
                    id="grouped-select"
                    labelId="demo-select-small-label"
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
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseUpdate}>Cancel</Button>
            <Button onClick={handleCloseUpdate}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default PerpareExam;

function StudentSelect() {
  return (
    <div>
      <FormControl focused sx={{ m: 1, p: 0, minWidth: 202 }}>
        <InputLabel htmlFor="grouped-select">Student Type</InputLabel>
        <Select
          size="small"
          defaultValue=""
          id="grouped-select"
          label="Student Type"
        >
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
