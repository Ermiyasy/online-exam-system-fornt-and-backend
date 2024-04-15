import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./AdminSide.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function AdminSide() {
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
        
        <h1 className="header-title">Admin</h1>
      </div>
      <div>
        <nav>
          <nav className="menu">
            <ul>
              <li>
                <Link className="list-title" to="/Admin">
                  Home
                </Link>
              </li>

              <li>
                <Link className="list-title">Manage Account</Link>

                <div>
                  <ul className="sub-menu">
                    <li>
                      <Link className="sub-list-title" to="/Admin/NewAccount">
                        New Account
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="sub-list-title"
                        to="/Admin/UpdateAccount"
                      >
                        Manage Account
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link className="list-title" to="/Admin/Question">
                  Question Bank
                </Link>
              </li>

              <br />

              <hr />

              <li>
                <Link className="list-title" to="/Admin/feedback">
                  FeedBack
                </Link>
              </li>

             
            </ul>
          </nav>
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
