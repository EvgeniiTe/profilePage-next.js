import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ImgInSqrContainer } from "../img-in-sqr-container";
import { ProfileContactsContext } from "../../helpers/profile-contacts-context";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    flexGrow: 1,
    background: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",

    [theme.breakpoints.down("sm")]: { marginBottom: theme.spacing(1.25) },
  },
  profileImg: {
    margin: theme.spacing(3),
    marginLeft: theme.spacing(3.75),
    marginRight: theme.spacing(4.25),
    textAlign: "left",
    backgroundColor: "transparent",

    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
      marginLeft: theme.spacing(1.25),
      marginRight: theme.spacing(1.25),
    },
  },
  profileName: {
    textAlign: "left",
    color: "#FFF",
    backgroundColor: "transparent",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "41px",

    [theme.breakpoints.down("sm")]: { fontSize: "14px", lineHeight: "19px" },

  },
  buttonText: {
    marginLeft: theme.spacing(3.75),
    textAlign: "right",
    backgroundColor: "transparent",
    color: "#FFF",
    fontWeight: "600",
  },
  buttonImage: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3.5),
    textAlign: "right",
    backgroundColor: "transparent",
    color: "#FFF",

    [theme.breakpoints.down("sm")]: {
      margin: "0",
      marginRight: theme.spacing(1.5),
    },
  },
  image: { },
}));

export const ProfileInfo = ({ startChanging, stopChanging, confirmed }) => {
  const classes = useStyles();
  const { profileName } = useContext(ProfileContactsContext);

  const stateButtonRender = (onClick, imgName = "PenImg", buttonText = "РЕДАКТИРОВАТЬ") => {
    return (
      <>
        <Hidden xsDown>
          <Grid item md={7}>
            <Paper className={classes.buttonText} elevation={0} square>{buttonText}</Paper>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={2} onClick={() => onClick()} style={{ cursor: "pointer" }}>
          <Paper className={classes.buttonImage} elevation={0} square>
            <ImgInSqrContainer className={classes.image} imgName={imgName} />
          </Paper>
        </Grid>
      </>
    );
  };

  const stateButtonContainer = (confirmedAlready) => {
    if (!confirmedAlready) {
      return (
        <>
          {stateButtonRender(stopChanging, "CrossWhiteImg", "ЗАКРЫТЬ") }
        </>
      );
    }

    return (
      <>
        {stateButtonRender(startChanging, "PenImg", "РЕДАКТИРОВАТЬ") }
      </>
    );
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        <Grid
          container
          item
          xs={11}
          md={9}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Paper className={classes.profileImg} elevation={0} square>
            <ImgInSqrContainer className={classes.image} imgName="ProfileImg" sideSizeLargeDisp="80px" sideSizeSmallDisp="40px" />
          </Paper>
          <Paper className={classes.profileName} elevation={0} square>
            {profileName}
          </Paper>
        </Grid>

        <Grid
          container
          item
          xs={1}
          md={3}
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          {stateButtonContainer(confirmed)}
        </Grid>
      </Grid>
    </div>
  );
};
