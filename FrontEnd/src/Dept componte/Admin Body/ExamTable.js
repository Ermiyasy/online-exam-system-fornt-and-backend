import React from "react";
import "../../Ins/parpereExam.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import ListSubheader from "@mui/material/ListSubheader";
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
function ExamTable() {
 
  return (
    <>

      <div>
        <div>
          <Card sx={{ minWidth: 255, m: 1, pY: 6 }}>
            <CardContent>
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
                        <Link to="/Dep/AddExam//updateTable">
                        <Button
                            variant="contained"
                            color="info"
                            size="small"
                            sx={{ mx: 2, my: 1 }}
                         
                          >
                            View
                          </Button>
                        </Link>
                    
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </div>
      </div>
   
    </>
  );
}
export default ExamTable;
