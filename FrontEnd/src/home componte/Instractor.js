import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import './Instractor.css'
import { Card } from '@mui/material';
function preventDefault(event) {
    event.preventDefault();
    
  }
  
function Instractor(){
  

    return(

        <>
     <div className="home-main">
        <div>
          <Card variant="body1" color="text.secondary" className="card">
            <Title> Add Exam </Title>
            <Typography component="p" variant="h5">
              new users add here
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              This card will help you to add account and the us.
            </Typography>
            <div>
            <Link className="sub-list-title" to="/Instructor/AddExam" >View More</Link>
            </div>
          </Card>
        </div>
        <div>
          <Card variant="body1" color="text.secondary" className="card">
            <Title> Manage Account </Title>
            <Typography component="p" variant="h5">
              manage accounts herr
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              This card will help you to manage and update Accounts.
            </Typography>
            <div>
            <Link className="sub-list-title" to="/Admin/UpdateAccount">View More</Link>
            
            </div>
          </Card>
        </div>
        <div>
          <Card variant="body1" color="text.secondary" className="card">
            <Title> Qusetion Bank </Title>
            <Typography component="p" variant="h5">
              Information about Qusetion
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              This card will help you to store and use
              quetions.
            </Typography>
            <div>
            <Link className="list-title" to="/Admin/Question">
                  View More
                </Link>
            </div>
          </Card>
        </div>
      </div>
       
       
      </>  
    );

}
export default Instractor