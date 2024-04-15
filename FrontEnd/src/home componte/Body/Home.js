
import { TextField } from "@mui/material"; 

function Home(){
     
    return(
        <div className="Home">
        <p> Home </p>
        <div className="text">

            <TextField id="outlined-basic" label="User Name " variant="outlined" className="textFiled"/>

            <TextField
            className="textFiled"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            />

            </div>
        </div>    
    );

}
export default Home