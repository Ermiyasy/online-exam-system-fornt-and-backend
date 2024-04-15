import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import './Home.css'
import { Card } from '@mui/material';
function preventDefault(event) {
    event.preventDefault();
    
  }
  
function Home(){
  

    return(

        <>
    <div className="home-main">
        <div>
          <Card variant="body1" color="text.secondary" className="card">
            <Title>Add Course </Title>
            <Typography component="p" variant="h5">
            Add New Course <br/>Here
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              This card will help you to add courses.
            </Typography>
            <div>
            <Link className="sub-list-title" to="/Admin/NewAccount" >View More</Link>
            </div>
          </Card>
        </div>
        <div>
          <Card variant="body1" color="text.secondary" className="card">
            <Title> Exam Approval </Title>
            <Typography component="p" variant="h5">
              Approve Exams<br/> Here
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              This card will help you to manage and approve exam.
            </Typography>
            <div>
            <Link className="sub-list-title" to="/Admin/UpdateAccount">View More</Link>
            
            </div>
          </Card>
        </div>
        <div>
          <Card variant="body1" color="text.secondary" className="card">
            <Title>Integration</Title>
            <Typography component="p" variant="h5">
             Integration Between Departments
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              This card will help you to Integration with other Departments.
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
export default Home