import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "470px",
    zIndex: "-1",
    margin: 0,
    padding: 0,

    [theme.breakpoints.down("sm")]: { height: "199px" }
  }
}));

export const Background = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1481 470" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1481V470C1114.99 -38.4972 367.553 634.454 0 401.971V0Z" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="1481" y1="235.001" x2="-15.6763" y2="235.001" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2196F3" />
            <stop offset="1" stopColor="#1EC3AF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
