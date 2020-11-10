import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import RingImage from "../../assets/Vector.svg";
import Line from "../../assets/Line 3.svg";
import { ImgInSqrContainer } from "../img-in-sqr-container";
import { ProfileContactsContext } from "../../helpers/profile-contacts-context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    paddingTop: theme.spacing(2.5),
  },
  paper: {
    paddingRight: theme.spacing(1),
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "transparent"
  },
  ringImg: {
    [theme.breakpoints.down("sm")]: {
      width: "16px",
      height: "19.5px"
    },
  },
  lineImg: { [theme.breakpoints.down("sm")]: { height: "24px" } }
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
          xs={4}
          md={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={0} square>
              <RingImage className={classes.ringImg} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={0} square>
              <Line className={classes.lineImg} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={0} square>
              <ImgInSqrContainer className={classes.image} imgName="ProfileImg" sideSizeLargeDisp="40px" sideSizeSmallDisp="24px" />
            </Paper>
          </Grid>

        </Grid>
        <Hidden xsDown>
          <Grid item xs={2}>
            <Paper className={classes.paper} elevation={0} square>{shortProfileName}</Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};
