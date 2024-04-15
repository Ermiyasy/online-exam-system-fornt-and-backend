import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import './Home.css'
import { Card } from '@mui/material';
function preventDefault(event) {
    event.preventDefault();
    
  }
  
function FeedBack(){
    const theme = useTheme();

    return(

        <>
    <div className='home-main'>
           <div className='home-main-list'>
           <Card variant="body1" color="text.secondary" className='card'>
                        <Title> Teacher </Title>
                    <Typography component="p" variant="h5">
                    Information about Teacher
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1, paddingY:2  }}>
                    This card will help you to have Information
                    and the Teacher.
                    </Typography>
                    <div>
                     
                    <Link color="primary" href="#" onClick={preventDefault}>
                        View More
                    </Link>
                    </div>
                </Card>
           </div>

             <div className='home-main-list'>
                <Card variant="body1" color="text.secondary" className='card'>
                        <Title> Student </Title>
                    <Typography component="p" variant="h5">
                    Information about Student

                    </Typography>
                    <Typography  color="text.secondary" sx={{ flex: 1 ,paddingY:2 }}>
                    This card will help you to have Information
                    and the Student.
                    </Typography>
                    <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                        View More
                    </Link>
                    </div>
                </Card>
           </div>
           
           <div className='home-main-list'>
               <Card variant="body1" color="text.secondary" className='card'>
                        <Title> Intergation </Title>
                    <Typography component="p" variant="h5">
                    Information about Intergation
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                    This card will help you to have Information
                    and the Intergation between departement.
                    </Typography>
                    <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                        View More
                    </Link>
                    </div>
                </Card>
            </div>
    </div>
       
       
      </>  
    );

}
export default FeedBack