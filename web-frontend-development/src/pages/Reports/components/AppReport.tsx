import "./AppReport.css";
import IAppReport from "./IAppReport";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const AppReport = (props: IAppReport) => {
    const { type, platform, os, subject, details, user_id, date } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className="container">
        <div className="reportType">
          <span> Type: {type}</span>
          <span>Platform: {platform}</span>
          <span>OS: {os}</span>
        </div>
        <div className="reportInfo">
          <span className="title">{subject}</span>
          <span className="message">{`${ details.length > 225 ? details.substring(0, 225) + '...' : details}`}</span>
        </div>
        <div className="extraInfo">
            <span>User Id: {user_id}</span>
            <span>Date: {date}</span>
        </div>
        <IconButton onClick={handleClick}>
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Mark as resolved</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
          <MenuItem onClick={handleClose}>Remove from station</MenuItem>
        </Menu>
      </div>
    );
}
export default AppReport;