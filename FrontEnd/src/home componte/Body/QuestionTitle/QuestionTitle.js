import * as React from "react";
import Typography from "@mui/material/Typography";
import "./QuestionTitle.css";

import Title from "../Title";


function QuestionTitle() {
  return (
    <>
      <div className="home-main">
        <div className="home-main-list">
   
              <div className="icon-top" >
              <Title> WelCome To Exam Page</Title>
                    <Typography color="text.secondary" sx={{ flex: 2,width:1900, height:20}}>
                     This page is for Add  Exam Page
                    </Typography>
             </div>
           
        </div>
      </div>
    </>
  );
}
export default QuestionTitle;
