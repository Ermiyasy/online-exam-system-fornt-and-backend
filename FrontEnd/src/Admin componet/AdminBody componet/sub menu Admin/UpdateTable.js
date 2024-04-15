import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";

function UpdateTable() {
  return (
    <>
      <SignUp />
    </>
  );
}
export default UpdateTable;
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            UPDATE ACCOUNT
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {student.map((data) => (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={data.FirstName}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={data.LastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={data.Email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="username"
                    label="User Name"
                    type="username"
                    id="username"
                    autoComplete="new-username"
                    value={data.UserName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={data.Password}
                  />
                </Grid>
              </Grid>
            ))}

            <GroupedSelect />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              UPDATE ACCOUNT{" "}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

function GroupedSelect() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <FormControl sx={{ marginLeft: 2, marginTop: 2, minWidth: 420 }}>
        <InputLabel htmlFor="grouped-select">Department</InputLabel>
        {student.map((data) => (
          <Select
            defaultValue=""
            id="grouped-select"
            label="Department"
            value={data.Department}
          >
            <MenuItem>
              <em>Department</em>
            </MenuItem>
            <ListSubheader>Natural Science</ListSubheader>
            <MenuItem value={1}>Biology</MenuItem>
            <MenuItem value={2}>Computer Science</MenuItem>
            <ListSubheader>IOT</ListSubheader>
            <MenuItem value={3}>Civil</MenuItem>
            <MenuItem value={4}>ECE</MenuItem>
            <ListSubheader>IOT</ListSubheader>
            <MenuItem value={3}>Civil</MenuItem>
            <MenuItem value={4}>ECE</MenuItem>
          </Select>
        ))}
      </FormControl>
    </div>
  );
}
