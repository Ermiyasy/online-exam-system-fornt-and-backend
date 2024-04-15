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
     
    <div className='home-main'>
    <Avatar
        src="/broken-image.jpg" 
        sx={{ width: 60, height: 60, marginX: 6, marginTop: 4 }}
      />
           <div className='home-main-list'>
           <Card variant="body1" color="text.secondary" className='card'>
       
                        <Title>Instractor</Title>
                    <Typography color="text.secondary" sx={{ flex: 1, paddingY:2  }}>
                   Full Name:
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1, paddingY:2  }}>
                    Role:
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1, paddingY:2  }}>
                    Role:
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1, paddingY:2  }}>
                    Role:
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
export default Instractor