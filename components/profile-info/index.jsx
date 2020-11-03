import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ImgInSqrContainer } from "../img-in-sqr-container";
import { ProfileContactsContext } from "../../helpers/profile-contacts-context";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    // backgroundColor: "#1A78C2",
    background: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    height: "128px"
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "transparent"
  },
  image: { },
});

export const ProfileInfo = ({ startChanging, stopChanging, confirmed }) => {
  const classes = useStyles();
  const { profileName } = useContext(ProfileContactsContext);

  const stateButtonRender = (onClick, imgName = "PenImg", buttonText = "РЕДАКТИРОВАТЬ") => {
    return (
      <>
        <Hidden xsDown>
          <Grid item xs={7}>
            <Paper className={classes.paper} elevation={0} square>{buttonText}</Paper>
          </Grid>
        </Hidden>
        <Grid item xs={3} onClick={() => onClick()} style={{ cursor: "pointer" }}>
          <Paper className={classes.paper} elevation={0} square>
            <ImgInSqrContainer className={classes.image} imgName={imgName} sideSize="18px" />
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
          xs={6}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={2}>
            <Paper className={classes.paper} elevation={0} square>
              <ImgInSqrContainer className={classes.image} imgName="ProfileImg" sideSize="80px" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0} square>
              {profileName}
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          xs={3}
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
