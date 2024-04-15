import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateNewAccount() {
  return (
    <>
      <SignUp />
    </>
  );
}
export default CreateNewAccount;

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function SignUp() {

  const [name, setName ] = React.useState('');
  const [email, setEmail ] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit  (event)  {
    event.preventDefault();
    axios.post('http://localhost:8081/create', {name,email})
    .then(res => {
      console.log(res);
      navigate('/');
    }).catch(err => console.log(err));
  };

  return (
    <>
    <form onSubmit = {handleSubmit}>
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
          <Avatar sx={{ m: -1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          CREATE ACCOUNT
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2.5}>
              <Grid item xs={12} sm={6}>
                <TextField
                size="small"
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={e =>setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  size="small"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  size="small"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={e =>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  size="small"
                  fullWidth
                  name="username"
                  label="User Name"
                  type="username"
                  id="username"
                  autoComplete="new-username"
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                    size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <RoleSelect/>
              <GroupedSelect />
              <StudentSelect />
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
            >
              Create ACCOUNT
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </form>
    </>
  );
}

function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ marginLeft: 2, marginTop: 2,p:1, minWidth: 420 }}>
        <InputLabel htmlFor="grouped-select">Department</InputLabel>
        <Select size="small" defaultValue="" id="grouped-select" label="Department">
          <MenuItem value="">
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
      </FormControl>
    </div>
  );
}
function RoleSelect() {
  return (
    <div>
      <FormControl sx={{ marginLeft: 2, marginTop: 2,p:1, minWidth: 420 }}>
        <InputLabel htmlFor="grouped-select">Role </InputLabel>
        <Select size="small" defaultValue="" id="grouped-select" label="Role ">
          <MenuItem value="">
            <em>Role </em>
          </MenuItem>
          <ListSubheader>Department Head</ListSubheader>
          <MenuItem value={1}>Department Head</MenuItem>
         
          <ListSubheader>Instractor</ListSubheader>
          <MenuItem value={3}>Instractor</MenuItem>
          <MenuItem value={4}>Exam Comuttee </MenuItem>
          <ListSubheader>Student</ListSubheader>
          <MenuItem value={3}>Student</MenuItem>
       
        </Select>
      </FormControl>
    </div>
  );
}

function StudentSelect() {
  return (
    <div>
      <FormControl sx={{ marginLeft: 2, marginTop: 2,p:1, minWidth: 420 }}>
        <InputLabel htmlFor="grouped-select">Student Select</InputLabel>
        <Select size="small" defaultValue="" id="grouped-select" label="Department">
          <MenuItem value="">
            <em>Department</em>
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

