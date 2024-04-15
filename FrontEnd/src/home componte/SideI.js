import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
import { Avatar, Divider } from "@mui/material";
import "./SideI.css";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Avatar
        src="/broken-image.jpg"
        sx={{
          width: 80,
          height: 80,
          marginX: 9,
          marginTop: 12,
          marginBottom: 2,
        }}
      />
      <div>
        <h1 className="header-title">Instructor</h1>
      </div>
      <div>
        <nav className="menu">
          <ul>
            <li>
              <Link className="list-title" to="/Instractor/">
                Home
              </Link>
            </li>
            <li className="menu">
              <Link className="list-title">Exam</Link>
              <div>
                <ul className="sub-menu">
                  <li className="sub-list-title">
                    <Link className="sub-list-title" to="/Instractor/AddExam">
                      Add Exam
                    </Link>
                  </li>
                  <li className="sub-list-title">
                    <Link
                      className="sub-list-title"
                      to="/Instractor/ManageExam"
                    >
                      Manage Exam
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu">
              <Link className="list-title">Offer</Link>
              <div>
                <ul className="sub-menu">
                  <li className="sub-list-title">
                    <Link className="sub-list-title" to="/Instractor/SendOffer">
                      Send Offer
                    </Link>
                  </li>
                  <li className="sub-list-title">
                    <Link className="sub-list-title" to="/Instractor/ViewOffer">
                      View Offer
                    </Link>
                  </li>
                  <li className="sub-list-title">
                    <Link
                      className="sub-list-title"
                      to="/Instractor/ApproveOffer"
                    >
                      Approve Offer
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link className="list-title" to="/Instractor/SendCandidate">
                Send Candidate
              </Link>
            </li>
            <li>
              <Link className="list-title" to="/Instractor/StudentResult">
                Student Result
              </Link>
            </li>
            <Divider />
            <li className="menu">
              <Link className="list-title">FeedBack</Link>
              <div>
                <ul className="sub-menu">
                  <li className="sub-list-title">
                    <Link
                      className="sub-list-title"
                      to="/Instractor/SendFeedback"
                    >
                      Send Feedback
                    </Link>
                  </li>
                  <li className="sub-list-title">
                    <Link
                      className="sub-list-title"
                      to="/Instractor/ViewFeedback"
                    >
                      View Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
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
