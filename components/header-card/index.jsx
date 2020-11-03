import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Ring from "../../assets/Vector.svg";
import Line from "../../assets/Line 3.svg";
import { ImgInSqrContainer } from "../img-in-sqr-container";
import { ProfileContactsContext } from "../../helpers/profile-contacts-context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "transparent"
  },
  image: { },
}));

export const HeaderCard = () => {
  const classes = useStyles();
  const { profileName } = useContext(ProfileContactsContext);
  const shortProfileName = profileName ? profileName.split(/\s+/).map((w, i) => (i ? `${w.substring(0, 1).toUpperCase()}.` : w)).join(" ") : null;
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={6}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={0} square>
              <Ring />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={0} square>
              <Line />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={0} square>
              <ImgInSqrContainer className={classes.image} imgName="ProfileImg" sideSize="40px" />
            </Paper>
          </Grid>

        </Grid>
        <Hidden xsDown>
          <Grid item xs={1}>
            <Paper className={classes.paper} elevation={0} square>{shortProfileName}</Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};
