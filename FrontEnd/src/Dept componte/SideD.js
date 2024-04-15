import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { Avatar} from "@mui/material";
import  MenuIcon from '@mui/icons-material/Menu'
import './SideD.css'

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
 
    left:true,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
         <Avatar 
            src="/broken-image.jpg" 
            sx={{ width: 80, height: 80 ,marginX:9,marginTop:12, marginBottom:2}}
            />
                <div > <h1 className="header-title">Dept-Head</h1> </div> 
          
        <div > 
                    <nav> 
                        <nav className="menu" > 
                <ul> 
                            <li> 
                                <Link className="list-title" to="/Dep">Home</Link> 
                            </li>

                            <li> 
                                <Link className="list-title"to="/Dep/AddCource">Add Cource</Link>  
                            </li>

                            <li> 
                                <Link className="list-title"to="/Dep/AddExam">Add Exam</Link>  
                            </li>

                            <li> 
                                <Link className="list-title"to="/Dep/MangeExam">Manage Exam</Link>  
                            </li>
                            
                            <li> 
                                <Link className="list-title" to="/Dep/Exam">Exam Approve</Link>  
                            </li>
                               
                            <li> 
                                <Link className="list-title" to="/Dep/ExamTable">Exam Table</Link>  
                            </li>

                            <li> 
                                <Link className="list-title" to="/Dep/ViewCadidate">View Cadidate</Link> 
                            </li> 
                       
                        
                           <li  className="menu"> 
                                <Link className="list-title">Intregration</Link> 

                                <div>
                                    <ul className='sub-menu'>
                                                <li >
                                                  <Link  className="sub-list-title" to="/Dep/Accept">Accept</Link> 
                                                </li>

                                                <li className="sub-list-title">
                                                    <Link   className="sub-list-title" to="/Dep/Request">Request</Link> 
                                                </li>
                                    </ul>
                                </div>
                            </li> 
                     <br/>
                  <hr/>
                           
                            <li > 
                                <Link className="list-title" to="/Dep/feedback">FeedBack</Link> 
                            </li> 
                           
                                
                        
                </ul> 
                    </nav> 
                  
               
                           
                        </nav>    
                     
            </div>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}><MenuIcon/></IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}