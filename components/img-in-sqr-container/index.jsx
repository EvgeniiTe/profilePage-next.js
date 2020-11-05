import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileImage from "../../assets/profile.svg";
import CommImage from "../../assets/@.svg";
import PhoneImage from "../../assets/phone.svg";
import NameImage from "../../assets/profile2.svg";
import CrossImage from "../../assets/cross.svg";
import PenImage from "../../assets/pen.svg";

const useStyles = makeStyles({
  root: ({ sideSize }) => ({
    width: sideSize,
    height: sideSize,
    verticalAlign: "top"
  })
});

export const ImgInSqrContainer = ({ imgName, sideSize }) => {
  const props = { sideSize };
  const classes = useStyles(props);
  switch (imgName) {
    case "ProfileImg":
      return (
        <ProfileImage className={classes.root} style={{ borderRadius: "50%" }} />
      );
    case "CommImg":
      return (
        <CommImage className={classes.root} />
      );
    case "PhoneImg":
      return (
        <PhoneImage className={classes.root} />
      );
    case "NameImg":
      return (
        <NameImage className={classes.root} />
      );
    case "PenImg":
      return (
        <PenImage className={classes.root} />
      );
    case "CrossGreyImg":
      return (
        <CrossImage className={classes.root} style={{ fill: "rgb(130,130,130)" }} />
      );
    case "CrossWhiteImg":
      return (
        <CrossImage className={classes.root} style={{ fill: "white" }} />
      );
    default:
      return null;
  }
};
