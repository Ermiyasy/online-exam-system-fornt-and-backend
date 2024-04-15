import * as React from "react";
import Typography from "@mui/material/Typography";
import "./AddCourceTitle.css";
import { Card } from "@mui/material";
import EmojiEventsSharpIcon from "@mui/icons-material/EmojiEventsSharp";
import Title from "../Title";


function AddCourceTitle() {
  return (
    <>
      <div className="home-main">
        <div className="home-main-list">
          <Card variant="body1" color="text.secondary" className="card" >
            <div className="title-icon">
              <div className="icon">
                <EmojiEventsSharpIcon color="text.secondary"  />
              </div>
              <div className="icon-top" >
              <Title> WelCome Add Cource Page </Title>
                    <Typography color="text.secondary" sx={{ flex:1,maxWidth:600,paddingRight:1,margin:1}}>
                     This page is for Adding Cource Page
                    </Typography>
             </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
export default AddCourceTitle;
