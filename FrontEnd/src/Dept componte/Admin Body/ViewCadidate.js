import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "./Home.css";
import { Card } from "@mui/material";
function preventDefault(event) {
  event.preventDefault();
}

function ViewCadidate() {
  return (
    <>
      <h1
        style={{
          marginTop: 80,
          marginBottom: 15,
          alignItems: "center",
          textAlign: "center",
          color: "hsl(199, 94%, 55%)",
          fontWeight: 700,
        }}
      >
        View Cadidate
      </h1>
      <TableContainer
        component={Paper}
        sx={{ mX: 15, marginLeft: 25, maxWidth: 1200, maxHeight: 500 }}
      >
        <Table
          aria-label="simple table"
          sx={{ textAlign: "center", padding: 0 }}
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.user_name}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="center">
                  <Link to="/Admin/UpdateAccount/updateTable">
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      sx={{ mx: 2 }}
                    >
                      Update
                    </Button>
                  </Link>
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const tableData = [
  {
    id: 1,
    user_name: "Meggi",
    first_name: "Meggi",
    last_name: "Zanuciolii",
    email: "mzanuciolii0@google.pl",
    gender: "Genderqueer",
    ip_address: "43.234.105.242",
  },
  {
    id: 2,
    user_name: "Dane",
    first_name: "Dane",
    last_name: "Wakelin",
    email: "dwakelin1@google.de",
    gender: "Male",
    ip_address: "93.51.139.109",
  },
  {
    id: 3,
    user_name: "Arlina",
    first_name: "Arlina",
    last_name: "Davidovic",
    email: "adavidovic2@imageshack.us",
    gender: "Female",
    ip_address: "186.207.76.81",
  },
  {
    id: 4,
    user_name: "Whitney",
    first_name: "Whitney",
    last_name: "Antuoni",
    email: "wantuoni3@shutterfly.com",
    gender: "Male",
    ip_address: "36.10.230.122",
  },
  {
    id: 5,
    user_name: "Francesca",
    first_name: "Francesca",
    last_name: "Eaglestone",
    email: "feaglestone4@sfgate.com",
    gender: "Female",
    ip_address: "110.126.115.173",
  },
  {
    id: 6,
    user_name: "Sterling",
    first_name: "Sterling",
    last_name: "Lovemore",
    email: "slovemore5@vkontakte.ru",
    gender: "Male",
    ip_address: "117.133.112.255",
  },
  {
    id: 7,
    user_name: "Danyelle",
    first_name: "Danyelle",
    last_name: "Cameli",
    email: "dcameli6@irs.gov",
    gender: "Female",
    ip_address: "180.187.95.142",
  },
  {
    id: 8,
    user_name: "Fabe",
    first_name: "Fabe",
    last_name: "Altofts",
    email: "faltofts7@topsy.com",
    gender: "Non-binary",
    ip_address: "39.149.145.103",
  },
  {
    id: 9,
    user_name: "Justin",
    first_name: "Justin",
    last_name: "Stud",
    email: "jstud8@flickr.com",
    gender: "Non-binary",
    ip_address: "148.114.171.10",
  },
  {
    id: 10,
    user_name: "Prissie",
    first_name: "Prissie",
    last_name: "MacNeillie",
    email: "pmacneillie9@google.ru",
    gender: "Female",
    ip_address: "209.6.63.79",
  },
];

export default ViewCadidate;
