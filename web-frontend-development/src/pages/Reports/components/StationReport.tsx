import "./StationReport.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import IStationReport from "./IStationReport";

const StationReport = (props: IStationReport) => {
  const { reportType, reportMessage, stationId, stationType, date } = props;
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
      <div className="stationInfo">
        <span>Station Id: {stationId}</span>
        <span>Station Type: {stationType}</span>
      </div>
      <div className="reportInfo">
        <span className="title">{reportType}</span>
        <span className="message">{`${ reportMessage.length > 230 ? reportMessage.substring(0, 230) + '...' : reportMessage}`}</span>
      </div>
      <div className="extraInfo">
            <span>User Id: Conchetumare</span>
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
};
export default StationReport;
