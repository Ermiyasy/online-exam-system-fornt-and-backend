import React from "react";
import "./add.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import "./Text Filed/RichTextFile.css";
import { Paper,Table,TableHead,TableBody,TableCell,TableContainer,TableRow,Link} from "@mui/material";
import QuestionTitle from "../../Ins/QuestionTitle/QuestionTitle";



const bull = (
  <Box
    component="span"
    sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
function ManageExam() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <>
    <div>
       <QuestionTitle/>
    </div>
   
      <div className="main-Exam">
        <div className="Exam">
          <Card sx={{ minWidth: 255 ,m:1}}>
            <CardContent>
            <TableContainer  component={Paper} sx={{mX:0,marginLeft:1,maxWidth:450, maxHeight:300}}>
           <Table aria-label="simple table" sx={{textAlign:'center',padding:0}} stickyHeader>
              <TableHead sx={{maxWidth:450}}>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Question</TableCell>
                    <TableCell align="center">Action</TableCell>

                  </TableRow>
              </TableHead>
              <TableBody sx={{maxWidth:450}}>
               
                    <TableRow
                      sx={{'&:last-child td, &:last-child th':{border:0}}}
                    >
                      <TableCell>1</TableCell>
                      <TableCell>{HTMLReactParser(content)}</TableCell>
                      
                      <TableCell align="center">
                        
                        <Link to='/Admin/UpdateAccount/updateTable'><Button variant="contained" color="info" size="small" sx={{mx:2,my:1}}>Update</Button></Link>
                        <Button variant="contained" color="error" size="small">Delete</Button>

                      </TableCell>

                    </TableRow>
                    <TableRow
                      sx={{'&:last-child td, &:last-child th':{border:0}}}
                    >
                      <TableCell>2</TableCell>
                      <TableCell>{HTMLReactParser(content)}</TableCell>
                      <TableCell align="center">
                        
                        <Link to='/Admin/UpdateAccount/updateTable'><Button variant="contained" color="info" size="small" sx={{mx:2}}>Update</Button></Link>
                        <Button variant="contained" color="error" size="small">Delete</Button>

                      </TableCell>

                    </TableRow>
                
              </TableBody>
           </Table>
        </TableContainer>
             
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <Paper className="ExamWord" variant="outlined" square={false}>
          <div className="que"> 
        <div className="word">
        <div className="word-main-exam">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            
          />
            <TextField id="outlined-basic" label="enter option 1" variant="outlined" />
            <TextField id="outlined-basic" label="enter option 2" variant="outlined" />
            <TextField id="outlined-basic" label="enter option 3" variant="outlined" />
            <TextField id="outlined-basic" label="enter option 4" variant="outlined" />
            <Checkbox {...label} />option 1
            <Checkbox {...label} />option 2
            <Checkbox {...label} />option 3
            <Checkbox {...label} />option 4
            </div>
        </div>
       
      </div>
    
        </Paper>
      </div>
    </>
  );
}
export default ManageExam;