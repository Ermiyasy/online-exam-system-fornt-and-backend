import * as React from "react";
import Typography from "@mui/material/Typography";
import "./ExmaTitle.css";
import { Card } from "@mui/material";
import EmojiEventsSharpIcon from "@mui/icons-material/EmojiEventsSharp";
import Title from "../Title";


function ExmaTitle() {
  return (
    <>
      <div>
        <div style={{marginLeft:"25%"}}>
          <Card variant="body1" >
            <div className="title-icon">
              <div className="icon">
                <EmojiEventsSharpIcon color="text.secondary"  />
              </div>
              <div className="icon-top" >
              <Title> Exam Approval </Title>
                    <Typography color="text.secondary" sx={{ flex: 1, paddingY:0.1,paddingX:0.1}}>
                     This page is for Exam Approval
                    </Typography>
             </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
export default ExmaTitle;
